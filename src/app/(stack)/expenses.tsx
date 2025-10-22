import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// --- Tipos (Sin Cambios) ---

type Participant = { id: string; name: string; avatar?: string };
type Expense = {
  id: string;
  title: string;
  amount: number;
  payerId: string;
  createdAt: string; // ISO 8601 string
  participants: string[]; 
  category?: string;
};

// --- Mocks (Sin Cambios) ---

const MOCK_PARTICIPANTS: Participant[] = [
  { id: "u1", name: "Ana" },
  { id: "u2", name: "Bruno" },
  { id: "u3", name: "Carla" },
  { id: "u4", name: "Diego" },
];

const MOCK_EXPENSES: Expense[] = [
  {
    id: "e1",
    title: "Supermercado (Semana 1)",
    amount: 18450,
    payerId: "u2", // Bruno pagó
    createdAt: "2025-10-09T13:45:00Z",
    participants: ["u1", "u2", "u3", "u4"], // Todos participan: 18450 / 4 = 4612.5 c/u
    category: "Comida",
  },
  {
    id: "e2",
    title: "Nafta peajes viaje",
    amount: 32000,
    payerId: "u1", // Ana pagó
    createdAt: "2025-10-08T19:12:00Z",
    participants: ["u1", "u2", "u3"], // Ana, Bruno, Carla participan: 32000 / 3 = 10666.67 c/u
    category: "Transporte",
  },
  {
    id: "e3",
    title: "Cervezas artesanales",
    amount: 5500,
    payerId: "u4", // Diego pagó
    createdAt: "2025-10-08T21:00:00Z",
    participants: ["u2", "u4"], // Bruno, Diego participan: 5500 / 2 = 2750 c/u
    category: "Diversión",
  },
];

const CURRENT_USER_ID = "u1"; 

// --- Lógica Mock de Saldo (Reutilizada) ---

function calculateBalances(expenses: Expense[], allParticipants: Participant[]): Record<string, number> {
    const balances: Record<string, number> = {};
    allParticipants.forEach(p => {
        if (p.id !== CURRENT_USER_ID) {
            balances[p.id] = 0; 
        }
    });

    expenses.forEach(expense => {
        if (expense.participants.includes(CURRENT_USER_ID)) {
            const numParticipants = expense.participants.length;
            const perHead = expense.amount / numParticipants;

            if (expense.payerId === CURRENT_USER_ID) {
                expense.participants.forEach(pid => {
                    if (pid !== CURRENT_USER_ID) {
                        balances[pid] = (balances[pid] || 0) + perHead; 
                    }
                });
            } 
            else {
                const payerId = expense.payerId;
                if (payerId in balances) {
                    balances[payerId] = (balances[payerId] || 0) - perHead;
                }
            }
        }
    });
    
    return balances; 
}


// --- Componentes Reutilizados (Chip, LabeledInput) ---

function Chip({ label, color }: { label: string; color?: string }) {
  return (
    <View style={[styles.chip, color ? { backgroundColor: color + '30', borderColor: color } : {}]}>
      <Text style={[styles.chipText, color ? { color: color } : {}]}>{label}</Text>
    </View>
  );
}

function LabeledInput(props: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "numeric";
}) {
  return (
    <SafeAreaView>
        <View style={{ gap: 6 }}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
            value={props.value}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            placeholderTextColor="#6b746e"
            keyboardType={props.keyboardType}
            style={styles.input}
        />
        </View>
    </SafeAreaView>
  );
}


// --- Componente de Tarjeta de Gasto (CORREGIDA LA INTERACCIÓN) ---

function ExpenseCard({ expense, participantsById, onEdit }: { expense: Expense, participantsById: Record<string, Participant>, onEdit: (id: string) => void }) {
    const perHead = expense.amount / expense.participants.length;
    const payer = participantsById[expense.payerId]?.name ?? "—";
    const date = new Date(expense.createdAt).toLocaleDateString('es-AR', { day: 'numeric', month: 'short' });

    // Hacemos que la tarjeta completa sea el pressable de "ver detalles/editar"
    return (
        <Pressable onPress={() => onEdit(expense.id)} style={styles.expenseCard}>
            <View style={styles.expenseHeader}>
                <View style={styles.expenseTitleGroup}>
                    <Text style={styles.expenseTitle}>{expense.title}</Text>
                    <Text style={styles.dateText}>{date}</Text>
                </View>
                {/* Dejamos el ícono de edición, pero su función es la misma, para no anidar Pressables */}
                <Pressable onPress={() => onEdit(expense.id)} hitSlop={10} style={styles.editButton}>
                    <Ionicons name="pencil-outline" size={16} color={C.muted} />
                </Pressable>
            </View>

            <View style={styles.amountContainer}>
                <Text style={styles.amount}>${expense.amount.toLocaleString("es-AR")}</Text>
            </View>

            <View style={styles.row}>
                <Ionicons name="wallet-outline" size={16} color={C.muted} />
                <Text style={styles.rowText}>Pagó: {payer}</Text>
            </View>
            <View style={styles.row}>
                <Ionicons name="people-outline" size={16} color={C.muted} />
                <Text style={styles.rowText}>
                    {expense.participants.length} personas · ${perHead.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} c/u
                </Text>
            </View>
            {expense.category ? (
                <View style={styles.chips}>
                    <Chip label={expense.category} color={C.accent} />
                </View>
            ) : null}
        </Pressable>
    );
}

// --- Componente de Resumen de Saldos (Reutilizada) ---

function BalanceSummary({ balances, participantsById, onSettleDebt }: { balances: Record<string, number>, participantsById: Record<string, Participant>, onSettleDebt: () => void }) {
    
    // Positivo = Ellos te deben (CRÉDITO); Negativo = Tú les debes (DEUDA)
    const relevantBalances = Object.entries(balances)
        .filter(([, amount]) => Math.abs(amount) > 0.01)
        .map(([id, amount]) => ({
            id,
            name: participantsById[id]?.name || 'Usuario Desconocido',
            amount: amount,
            isOwed: amount > 0, // Positivo: Te deben
            color: amount > 0 ? C.accent : C.warning, 
        }));
        
    const hasDebts = relevantBalances.length > 0;
    
    return (
        <View style={[styles.card, { marginTop: 12 }]}>
            <Text style={styles.cardTitle}>Saldos Individuales (Tú: Ana)</Text>
            <View style={{ height: 8 }} />
            
            {relevantBalances.length === 0 ? (
                <Text style={[styles.muted, { textAlign: 'center', paddingVertical: 8 }]}>¡Están al día! No hay deudas pendientes.</Text>
            ) : (
                relevantBalances.map(({ id, name, amount, isOwed, color }) => (
                    <View key={id} style={styles.balanceRow}>
                        <Ionicons name={isOwed ? "arrow-down-circle" : "arrow-up-circle"} size={18} color={color} />
                        <Text style={[styles.balanceText, { flex: 1 }]}>
                            {name}
                        </Text>
                        <Text style={[styles.balanceAmount, { color }]}>
                            {isOwed ? 'Te debe ' : 'Tú le debes '}
                            ${Math.abs(amount).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </Text>
                    </View>
                ))
            )}
            
            {/* BOTÓN SALDAR CUENTAS */}
            {hasDebts && (
                <Pressable style={styles.settleBtn} onPress={onSettleDebt}>
                    <Text style={styles.settleBtnText}>
                        <Ionicons name="checkmark-done-circle-outline" size={16} color={C.bg} /> Saldar Cuentas
                    </Text>
                </Pressable>
            )}
        </View>
    );
}


// --- Pantalla Principal de Gastos (CORRIGIENDO onEditExpense) ---

export default function ExpensesScreen() {
  const router = useRouter();
  
  // Estado para el Modal de Agregar/Editar Gasto
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // Nuevo estado para simular modo edición
  const [draftTitle, setDraftTitle] = useState("");
  const [draftAmount, setDraftAmount] = useState("");
  const [draftPayer, setDraftPayer] = useState(MOCK_PARTICIPANTS[0].id);
  const [draftSplitMode, setDraftSplitMode] = useState<"equal" | "custom">("equal");
  const [draftSelected, setDraftSelected] = useState<string[]>(
    MOCK_PARTICIPANTS.map((p) => p.id)
  );
  const [draftCustomAmounts, setDraftCustomAmounts] = useState<Record<string, string>>({});
  
  // Estado para el Modal de Saldar Deuda
  const [isSettleModalOpen, setIsSettleModalOpen] = useState(false);
  const [settlePayeeId, setSettlePayeeId] = useState(""); 
  const [settlePayerId, setSettlePayerId] = useState(CURRENT_USER_ID); 
  const [settleAmount, setSettleAmount] = useState("");

  const expenses = MOCK_EXPENSES;
  const participantsById = useMemo(
    () => Object.fromEntries(MOCK_PARTICIPANTS.map((p) => [p.id, p] as const)),
    []
  );

  const totalExpenses = useMemo(() => expenses.reduce((acc, e) => acc + e.amount, 0), [expenses]);
  const balances = useMemo(() => calculateBalances(expenses, MOCK_PARTICIPANTS), [expenses]);
  
  // CORRECCIÓN: Ahora abre el modal y simula la carga de datos
  const onEditExpense = (expenseId: string) => {
      console.log(`Abriendo modal de edición para el gasto: ${expenseId}`);
      
      // Simular que el modal se carga con datos de edición
      const expenseToEdit = expenses.find(e => e.id === expenseId);
      if (expenseToEdit) {
          setDraftTitle(expenseToEdit.title);
          setDraftAmount(String(expenseToEdit.amount));
          setDraftPayer(expenseToEdit.payerId);
          setDraftSelected(expenseToEdit.participants);
          
          setIsEditing(true); // Activa el modo edición
          setIsCreateModalOpen(true); // Abre el modal de creación, que ahora funcionará como edición
      }
  }
  
  // Función para cerrar el modal de creación/edición y resetear estados
  const closeCreateModal = () => {
      setIsCreateModalOpen(false);
      setIsEditing(false); // Desactiva el modo edición
      // Resetear drafts si es necesario (para el próximo "Agregar Gasto")
      setDraftTitle("");
      setDraftAmount("");
      setDraftPayer(MOCK_PARTICIPANTS[0].id);
      setDraftSelected(MOCK_PARTICIPANTS.map((p) => p.id));
      setDraftCustomAmounts({});
      setDraftSplitMode("equal");
  }
  
  // Función para abrir el modal de saldar deudas
  const openSettleModal = () => {
      setIsSettleModalOpen(true);
      const topOwer = Object.entries(balances)
        .find(([, amount]) => amount < 0); 
      if (topOwer) {
          setSettlePayeeId(topOwer[0]);
          setSettleAmount(String(Math.abs(topOwer[1]).toFixed(2)));
      }
  }

  // Simulación de cancelación de deuda
  const onConfirmSettle = () => {
      console.log(`CONFIRMANDO PAGO: ${settlePayerId} pagó $${settleAmount} a ${settlePayeeId}`);
      setIsSettleModalOpen(false);
  }

  return (
    <SafeAreaView style={styles.safe}>
      
      {/* Botón de Back Flotante */}
      <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={22} color="#e8eee9" />
      </Pressable>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Portada + avatar */}
        <View style={styles.portadaWrap}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }}
            style={styles.portada}
          />
          <View style={styles.avatarOverlay}>
            <View style={styles.avatarCircle}>
              <Ionicons name="wallet-outline" size={30} color={C.accent} />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Gastos del grupo</Text>

        {/* --- BANNER: Próximo Viaje --- */}
        <Pressable style={[styles.card, { marginTop: 16 }]} onPress={() => console.log('Ir a detalles del viaje')}>
          <View style={styles.bannerHeader}>
            <Text style={styles.cardTitle}>Informacion general del viaje</Text>
            <Ionicons name="chevron-forward" size={18} color={C.muted} />
          </View>
          <View style={{ height: 8 }} />
          <Text style={styles.muted}>Roma, Italia</Text>
          <Text style={styles.muted}>1 Diciembre 2025 - 8 Diciembre 2025</Text>
          <Text style={styles.muted}>4 participantes</Text>
        </Pressable>
        {/* --- FIN BANNER --- */}

        {/* Resumen General */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumen</Text>
          <View style={{ height: 8 }} />
          <Text style={styles.muted}>Participantes: {MOCK_PARTICIPANTS.length}</Text>
          <Text style={styles.muted}>
            Total gastado: ${" "}
            <Text style={{ color: C.text, fontWeight: 'bold' }}>{totalExpenses.toLocaleString("es-AR")}</Text>
          </Text>
          <Text style={styles.muted}>
            <Text style={{ color: C.accent, fontWeight: 'bold' }}>Tu saldo</Text>: <Text style={{ color: C.accent, fontWeight: 'bold' }}>$X (mock)</Text>
          </Text>
        </View>
        
        {/* --- Resumen de Saldos Individuales (con botón Saldar) --- */}
        <BalanceSummary 
            balances={balances} 
            participantsById={participantsById} 
            onSettleDebt={openSettleModal}
        />
        {/* --- FIN Resumen de Saldos --- */}
        
        {/* --- BOTÓN PARA REGISTRAR NUEVO GASTO --- */}
        <View style={styles.topActionButtonContainer}>
            <Pressable style={styles.primaryBtn} onPress={() => { setIsEditing(false); setIsCreateModalOpen(true); }}>
                <Text style={styles.primaryBtnText}>
                    <Ionicons name="add" size={16} color="#0F1310" /> Registrar nuevo gasto
                </Text>
            </Pressable>
        </View>
        {/* --- FIN BOTÓN --- */}

        {/* Lista de movimientos */}
        <Text style={styles.sectionTitle}>Movimientos</Text>
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
              <ExpenseCard 
                expense={item} 
                participantsById={participantsById} 
                onEdit={onEditExpense} // Ahora llama a la función corregida
              />
          )}
          ListFooterComponent={<View style={{ height: 8 }} />}
          ListEmptyComponent={<Text style={[styles.muted, { textAlign: 'center', margin: 20 }]}>¡Aún no hay gastos registrados! 💸</Text>}
        />
      </ScrollView>

      {/* Modal para Agregar/Editar Gasto */}
      <Modal
        visible={isCreateModalOpen}
        animationType="slide"
        transparent
        onRequestClose={closeCreateModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {isEditing ? "Editar Gasto" : "Agregar Gasto"}
              </Text>
              <Pressable onPress={closeCreateModal}>
                <Ionicons name="close" size={22} color="#e8eee9" />
              </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 12 }}>
              <LabeledInput
                label="Descripción"
                placeholder="Ej: Pizza del viernes"
                value={draftTitle}
                onChangeText={setDraftTitle}
              />
              <LabeledInput
                label="Monto"
                placeholder="0"
                keyboardType="numeric"
                value={draftAmount}
                onChangeText={setDraftAmount}
              />

              <Text style={styles.label}>¿Quién pagó?</Text>
              <View style={styles.pillRow}>
                {MOCK_PARTICIPANTS.map((p) => (
                  <Pressable
                    key={p.id}
                    onPress={() => setDraftPayer(p.id)}
                    style={[styles.pill, draftPayer === p.id && styles.pillActive]}
                  >
                    <Text
                      style={[styles.pillText, draftPayer === p.id && styles.pillTextActive]}
                    >
                      {p.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
              
              <Text style={styles.label}>Categoría (Opcional)</Text>
              <View style={styles.pillRow}>
                {["Comida", "Transporte", "Alojamiento", "Actividad", "Otro"].map((cat) => (
                  <Pressable
                    key={cat}
                    onPress={() => console.log(`Categoría seleccionada: ${cat}`)}
                    style={[styles.pill]}
                  >
                    <Text style={styles.pillText}>{cat}</Text>
                  </Pressable>
                ))}
              </View>
              
              {/* Opciones de división */}
              <Text style={styles.label}>Dividir</Text>
              <View style={styles.pillRow}>
                {(["equal", "custom"] as const).map((mode) => (
                  <Pressable
                    key={mode}
                    onPress={() => setDraftSplitMode(mode)}
                    style={[styles.pill, draftSplitMode === mode && styles.pillActive]}
                  >
                    <Text
                      style={[styles.pillText, draftSplitMode === mode && styles.pillTextActive]}
                    >
                      {mode === "equal" ? "Partes iguales" : "Personalizado"}
                    </Text>
                  </Pressable>
                ))}
              </View>

              {/* Contenido para "Personalizado" */}
              {draftSplitMode === 'custom' && (
                  <View style={styles.customSplitContainer}>
                      <Text style={[styles.label, { marginBottom: 8 }]}>Montos por participante (Personalizado)</Text>
                      {draftSelected.map(pid => {
                          const name = participantsById[pid]?.name || '—';
                          const currentAmount = draftCustomAmounts[pid] || '';
                          
                          return (
                              <LabeledInput
                                  key={pid}
                                  label={`Monto para ${name}`}
                                  placeholder="0"
                                  keyboardType="numeric"
                                  value={currentAmount}
                                  onChangeText={(text) => setDraftCustomAmounts(prev => ({ ...prev, [pid]: text }))}
                              />
                          );
                      })}
                  </View>
              )}
              
              <Text style={styles.label}>Participantes</Text>
              <View style={{ gap: 8 }}>
                {MOCK_PARTICIPANTS.map((p) => {
                  const checked = draftSelected.includes(p.id);
                  return (
                    <Pressable
                      key={p.id}
                      onPress={() =>
                        setDraftSelected((prev) =>
                          checked ? prev.filter((id) => id !== p.id) : [...prev, p.id]
                        )
                      }
                      style={styles.checkRow}
                    >
                      <Ionicons
                        name={checked ? "checkbox" : "square-outline"}
                        size={20}
                        color={checked ? C.accent : C.muted}
                      />
                      <Text style={styles.checkText}>{p.name}</Text>
                    </Pressable>
                  );
                })}
              </View>

              <View style={{ height: 12 }} />
              <Pressable style={[styles.primaryBtn, { opacity: 0.8 }]} onPress={() => console.log(isEditing ? 'Guardando Edición' : 'Guardando Nuevo Gasto')}>
                <Text style={styles.primaryBtnText}>{isEditing ? "Guardar Cambios" : "Guardar Gasto"}</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
      
      {/* --- Modal para Saldar Deuda (Reutilizado) --- */}
      <Modal
        visible={isSettleModalOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setIsSettleModalOpen(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Saldar Deuda</Text>
              <Pressable onPress={() => setIsSettleModalOpen(false)}>
                <Ionicons name="close" size={22} color="#e8eee9" />
              </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 16 }}>
              <Text style={styles.label}>¿Quién está pagando?</Text>
              <View style={styles.pillRow}>
                {MOCK_PARTICIPANTS.map((p) => (
                  <Pressable
                    key={p.id}
                    onPress={() => setSettlePayerId(p.id)}
                    style={[styles.pill, settlePayerId === p.id && styles.pillActive]}
                  >
                    <Text
                      style={[styles.pillText, settlePayerId === p.id && styles.pillTextActive]}
                    >
                      {p.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
              
              <Ionicons name="swap-vertical-outline" size={28} color={C.muted} style={{alignSelf: 'center'}} />

              <Text style={styles.label}>¿Quién recibe el pago?</Text>
              <View style={styles.pillRow}>
                {MOCK_PARTICIPANTS.map((p) => (
                  <Pressable
                    key={p.id}
                    onPress={() => setSettlePayeeId(p.id)}
                    style={[styles.pill, settlePayeeId === p.id && styles.pillActive]}
                  >
                    <Text
                      style={[styles.pillText, settlePayeeId === p.id && styles.pillTextActive]}
                    >
                      {p.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
              
              <LabeledInput
                label="Monto Pagado"
                placeholder="0.00"
                keyboardType="numeric"
                value={settleAmount}
                onChangeText={setSettleAmount}
              />

              <View style={{ height: 12 }} />
              <Pressable style={styles.primaryBtn} onPress={onConfirmSettle}>
                <Text style={styles.primaryBtnText}>Confirmar Pago</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}


// --- Constantes de Estilo (Reutilizadas) ---

const C = {
  bg: "#0F1310",
  card: "#1a1f1b",
  border: "#2a322b",
  text: "#e8eee9",
  muted: "#9aa49d",
  accent: "#9ec39f", // Verde original para botones, crédito, y elementos principales
  warning: "#d9534f", // Rojo/coral suave para indicar deuda (Tu debes)
};

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },

  backBtn: {
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 20,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1f1b",
    borderWidth: 1,
    borderColor: "#2a322b",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },

  portadaWrap: { width: "100%", position: "relative", marginBottom: 60 },
  portada: {
    width: "100%",
    height: 160,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarOverlay: {
    position: "absolute",
    bottom: -40,
    left: "50%",
    marginLeft: -40,
    overflow: "hidden",
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: C.card,
    borderWidth: 3,
    borderColor: C.bg,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    marginTop: 12,
    fontSize: 22,
    fontWeight: "700",
    color: C.text,
    textAlign: "center",
  },
  
  // --- Estilos de Card/Banner ---
  card: {
    width: "90%",
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: C.border,
  },
  cardTitle: { color: C.text, fontSize: 16, fontWeight: "700" },
  muted: { color: C.muted, fontSize: 14 },
  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  
  // --- Estilos de Saldo Individual ---
  balanceRow: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8,
      gap: 8,
      borderBottomWidth: 1,
      borderBottomColor: C.border + '50',
  },
  balanceText: {
      fontSize: 14,
      color: C.text,
      fontWeight: '600',
  },
  balanceAmount: {
      fontSize: 14,
      fontWeight: '700',
  },
  settleBtn: {
      backgroundColor: C.accent, // Usamos el verde principal
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 12,
  },
  settleBtnText: {
      color: C.bg,
      fontWeight: '800',
      fontSize: 15,
  },

  topActionButtonContainer: {
      width: "90%",
      alignSelf: "center",
      marginTop: 16,
      marginBottom: 8,
  },

  sectionTitle: {
    color: C.text,
    fontWeight: "700",
    fontSize: 16,
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: 16,
  },

  // --- Estilos de Tarjeta de Gasto ---
  expenseCard: {
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  expenseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  expenseTitleGroup: {
      flexDirection: 'column',
      flexShrink: 1,
  },
  expenseTitle: { fontSize: 16, fontWeight: "700", color: C.text, flexShrink: 1 },
  dateText: { fontSize: 12, color: C.muted },
  amountContainer: {
      alignSelf: 'flex-end',
      marginBottom: 6,
      marginTop: -10,
  },
  amount: { fontSize: 20, fontWeight: "800", color: C.accent },
  editButton: {
      padding: 4, 
  },

  row: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 2 },
  rowText: { fontSize: 13, color: C.muted },

  chips: { marginTop: 8, flexDirection: "row", flexWrap: "wrap", gap: 6 },
  chip: {
    backgroundColor: "#233027",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: C.border,
  },
  chipText: { fontSize: 12, color: C.accent },

  // --- Estilos de Modal ---
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 16,
    justifyContent: "flex-end",
  },
  modalCard: {
    maxHeight: "88%",
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  modalHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "800", color: C.text },

  label: { fontSize: 13, color: C.text, fontWeight: "700" },
  input: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.select({ ios: 10, android: 8 }),
    fontSize: 14,
    backgroundColor: "#0f1511",
    color: C.text,
  },

  pillRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#2a322b",
    borderWidth: 1,
    borderColor: C.border,
  },
  pillActive: { backgroundColor: "#233027", borderColor: C.accent },
  pillText: { fontSize: 13, color: C.text },
  pillTextActive: { color: C.accent, fontWeight: "700" },

  checkRow: { flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 4 },
  checkText: { fontSize: 14, color: C.text },
  
  customSplitContainer: {
      padding: 12,
      borderRadius: 12,
      backgroundColor: "#111813",
      borderWidth: 1,
      borderColor: C.border,
      gap: 10,
  },

  primaryBtn: {
    backgroundColor: C.accent,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryBtnText: { color: "#0F1310", fontWeight: "800", fontSize: 15 },
});