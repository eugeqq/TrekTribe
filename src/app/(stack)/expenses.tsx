import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

/* Types */
type Participant = { id: string; name: string; avatar?: string };
type Expense = {
  id: string;
  title: string;
  amount: number;
  payerId: string;
  createdAt: string;
  participants: string[];
  category?: string | null;
};
type Miembro = { id: string | number; nombre: string };

type Grupo = {
  id: string | number;
  nombre: string;
  ubicacion?: string;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  foto?: string | null;
  miembros?: Miembro[];
  imagenUrl?: string;
};

/* Colors + styles (mantengo los tuyos) */
const C = {
  bg: "#0F1310",
  card: "#1a1f1b",
  border: "#2a322b",
  text: "#e8eee9",
  muted: "#9aa49d",
  accent: "#9ec39f",
  warning: "#d9534f",
};



const toDDMMYYYY = (val?: string | number | Date | null) => {
  if (!val) return "—";

  // Si ya viene como dd/mm/aaaa, lo dejamos
  if (typeof val === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(val)) {
    return val;
  }

  // Caso ISO "YYYY-MM-DD" o "YYYY-MM-DDTHH:mm:ssZ": evitar líos de zona horaria
  if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}/.test(val)) {
    const [y, m, rest] = val.split("-");
    const d = rest.slice(0, 2); // toma los 2 primeros chars del día
    return `${d}/${m}/${y}`;
  }

  const d = new Date(val);
  if (isNaN(d.getTime())) return "—";

  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

/* Helper: calcula balances — ahora recibe userId dinámico */
function calculateBalances(expenses: Expense[], allParticipants: Participant[], userId: string | null): Record<string, number> {
  const balances: Record<string, number> = {};
  allParticipants.forEach((p) => {
    balances[p.id] = 0;
  });

  if (!userId) return balances;

  expenses.forEach((expense) => {
    // Si el usuario no participa en el gasto, ignoralo
    if (!expense.participants.includes(userId)) return;

    const numParticipants = expense.participants.length || 1;
    const perHead = expense.amount / numParticipants;

    if (expense.payerId === userId) {
      // los otros le deben al user
      expense.participants.forEach((pid) => {
        if (pid !== userId) balances[pid] = (balances[pid] || 0) + perHead;
      });
    } else {
      // el pagador tiene saldo negativo (le deben)
      const payer = expense.payerId;
      balances[payer] = (balances[payer] || 0) - perHead;
    }
  });

  return balances;
}

/* Componentes internos simples (mantengo tu estructura) */
function ExpenseCard({ expense, participantsById, onEdit }: { expense: Expense; participantsById: Record<string, Participant>; onEdit: (id: string) => void; }) {
  const perHead = expense.amount / (expense.participants.length || 1);
  const payer = participantsById[expense.payerId]?.name ?? "—";
  const date = new Date(expense.createdAt).toLocaleDateString("es-AR", { day: "numeric", month: "short" });

  return (
    <Pressable onPress={() => onEdit(expense.id)} style={styles.expenseCard}>
      <View style={styles.expenseHeader}>
        <View style={{ flex: 1 }}>
          <Text style={styles.expenseTitle}>{expense.title}</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <Pressable onPress={() => onEdit(expense.id)} hitSlop={10}>
          <Ionicons name="pencil-outline" size={16} color={C.muted} />
        </Pressable>
      </View>

      <View style={{ alignSelf: "flex-end", marginBottom: 6, marginTop: -10 }}>
        <Text style={styles.amount}>${expense.amount.toLocaleString("es-AR")}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
        <Ionicons name="wallet-outline" size={16} color={C.muted} />
        <Text style={{ color: C.muted }}>{`Pagó: ${payer}`}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 8, alignItems: "center", marginTop: 6 }}>
        <Ionicons name="people-outline" size={16} color={C.muted} />
        <Text style={{ color: C.muted }}>{`${expense.participants.length} · $${perHead.toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} c/u`}</Text>
      </View>
    </Pressable>
  );
}

function BalanceSummary({ balances, participantsById, onSettleDebt }: { balances: Record<string, number>; participantsById: Record<string, Participant>; onSettleDebt: () => void; }) {
  const relevant = Object.entries(balances)
    .filter(([, a]) => Math.abs(a) > 0.01)
    .map(([id, amount]) => ({ id, amount, name: participantsById[id]?.name ?? "Usuario", isOwed: amount > 0 }));

  if (relevant.length === 0) {
    return (
      <View style={[styles.card, { marginTop: 12 }]}>
        <Text style={styles.cardTitle}>Saldos Individuales</Text>
        <Text style={{ color: C.muted, textAlign: "center", marginTop: 8 }}>¡Están al día! No hay deudas pendientes.</Text>
      </View>
    );
  }

  return (
    <View style={[styles.card, { marginTop: 12 }]}>
      <Text style={styles.cardTitle}>Saldos Individuales</Text>
      <View style={{ height: 8 }} />
      {relevant.map((r) => (
        <View key={r.id} style={{ flexDirection: "row", alignItems: "center", paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: C.border + "30" }}>
          <Ionicons name={r.isOwed ? "arrow-down-circle" : "arrow-up-circle"} size={18} color={r.isOwed ? C.accent : C.warning} />
          <Text style={{ color: C.text, fontWeight: "600", flex: 1, marginLeft: 8 }}>{r.name}</Text>
          <Text style={{ color: r.isOwed ? C.accent : C.warning, fontWeight: "700" }}>
            {r.isOwed ? "Te debe " : "Tú le debes "} ${Math.abs(r.amount).toLocaleString("es-AR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </Text>
        </View>
      ))}
      <Pressable style={{ marginTop: 12, backgroundColor: C.accent, borderRadius: 10, padding: 10, alignItems: "center" }} onPress={onSettleDebt}>
        <Text style={{ color: C.bg, fontWeight: "800" }}><Ionicons name="checkmark-done-circle-outline" size={16} color={C.bg} /> Saldar Cuentas</Text>
      </Pressable>
    </View>
  );
}

/* Main component (mantengo modales y comportamiento) */
export default function ExpensesScreen({ route }: any) {
  const router = useRouter();
  const params = useLocalSearchParams<{ grupo?: string; imageUrl?:string }>();
  
  const { grupo } = params; 

  const parsed=JSON.parse(grupo);
  

  const [userId, setUserId] = useState<string | null>(null);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [viajeData, setViajeData] = useState<Grupo | null>(null);
  const viajeId = viajeData?.id ?? null;

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftAmount, setDraftAmount] = useState("");
  const [draftPayer, setDraftPayer] = useState("");
  const [draftSelected, setDraftSelected] = useState<string[]>([]);
  const [editExpenseId, setEditExpenseId] = useState<string | null>(null);

  const [isSettleModalOpen, setIsSettleModalOpen] = useState(false);
  const [settlePayeeId, setSettlePayeeId] = useState("");
  const [settlePayerId, setSettlePayerId] = useState("");
  const [settleAmount, setSettleAmount] = useState("");

  const API_URL = process.env.EXPO_PUBLIC_API_URL;

  useEffect(() => {
    const init = async () => {
      setLoading(true);

      // Obtener userId
      const uid = await AsyncStorage.getItem("userId");
      setUserId(uid);

      if (!grupo) {
        setLoading(false);
        return;
      }

      let viajeId: number | null = null;

      try {
        const parsedGrupo = JSON.parse(grupo);
        setViajeData(parsedGrupo);
        viajeId = parsedGrupo.id;

        // Inicializar participantes desde params
        setParticipants(parsedGrupo.miembros.map((m) => ({
          id: String(m.id),
          name: m.nombre,
        })));
      } catch (e) {
        console.warn("Error parsing grupo param:", e);
      }

      if (viajeId) {
        await fetchTripData(viajeId);
      }

      setLoading(false);
    };

    init();
  }, [grupo]);

  const fetchTripData = async (tripId: number) => {
    try {
      setLoading(true);
      const [detalleRes, expRes] = await Promise.all([
        fetch(`${API_URL}/viajes/detalle/${tripId}`),
        fetch(`${API_URL}/viajes/${tripId}/gastos`),
      ]);

      if (!detalleRes.ok) throw new Error("Error al obtener detalle del viaje");
      if (!expRes.ok) throw new Error("Error al obtener gastos");

      const detalleData = await detalleRes.json();
      const expData = await expRes.json();

      const participantesAdaptados = detalleData.miembros.map((m: any) => ({
        id: String(m.usuario?.id ?? m.usuarioId),  // ID del miembro (no del usuario)
        miembroId: String(m.id),  
        name: `${m.usuario?.nombre ?? ""} ${m.usuario?.apellido ?? ""}`.trim(),
        avatar: m.usuario?.avatarUri ?? null,
        rol: m.rol,
      }));

      setParticipants(participantesAdaptados);

      const gastosAdaptados = expData.map((e: any) => ({
        id: String(e.id),
        title: e.title ?? e.description ?? "Gasto",
        amount: Number(e.amount),
        payerId: String(e.payerId),
        createdAt: e.createdAt ?? new Date().toISOString(),
        participants: e.participants ?? participantesAdaptados.map((p: any) => p.id),
        category: e.category ?? null,
      }));

      setExpenses(gastosAdaptados);
      

    } catch (error) {
      console.error("Error fetchTripData:", error);
      Alert.alert("Error", "No se pudieron cargar los datos del viaje.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (participants.length > 0) {
      // si no hay aún draftPayer, inicializar con el primero
      setDraftPayer((prev) => prev ?? String(participants[0].id));
      // seleccionar todos por defecto
      setDraftSelected(participants.map((p) => String(p.id)));
    }
  }, [participants]);

  const participantsById = useMemo(() => Object.fromEntries(participants.map((p) => [p.id, p] as const)), [participants]);
  const totalExpenses = useMemo(() => expenses.reduce((acc, e) => acc + Number(e.amount), 0), [expenses]);
  const balances = useMemo(() => calculateBalances(expenses, participants, userId), [expenses, participants, userId]);

  const onEditExpense = (expenseId: string) => {
    const ex = expenses.find((e) => e.id === expenseId);
    if (!ex) return;
    setDraftTitle(ex.title);
    setDraftAmount(String(ex.amount));
    setDraftPayer(ex.payerId);
    setDraftSelected(ex.participants);
    setEditExpenseId(expenseId);
    setIsEditing(true);
    setIsCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
    setIsEditing(false);
    setDraftTitle("");
    setDraftAmount("");
    setDraftPayer(participants[0]?.id ?? "");
    setDraftSelected(participants.map((p) => p.id));
    setEditExpenseId(null);
  };

  const onSaveExpense = async () => {
    if (!draftTitle || !draftAmount || !draftPayer) {
      Alert.alert("Error", "Completá descripción, monto y pagador.");
      return;
    }
    try {
      const payload = {
        descripcion: draftTitle,
        monto: Number(draftAmount),
        categoria: null,
        pagadoPorId: Number(draftPayer),
        viajeId: Number(viajeId),
        participantes: draftSelected.map(id => Number(id)), 
      };

      const url = editExpenseId ? `${API_URL}/gastos/${editExpenseId}` : `${API_URL}/gastos`;
      const method = editExpenseId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || "Error guardando gasto");
      }

      await fetchTripData(viajeId);
      closeCreateModal();

    } catch (error) {
      console.error("Error onSaveExpense:", error);
      Alert.alert("Error", "No se pudo guardar el gasto.");
    }
  };

  const onDeleteExpense = async (expenseId: string) => {
   
          try {
            const res = await fetch(`${API_URL}/gastos/${expenseId}`, { method: "DELETE" });
            if (!res.ok) throw new Error("Error al eliminar");
            await fetchTripData(viajeId);
          } catch (err) {
            console.error("Error borrar gasto:", err);
            Alert.alert("Error", "No se pudo eliminar el gasto.");
          }
        
  
  };

  const onConfirmSettle = async () => {
    Alert.alert("Saldar", "Esta acción requiere endpoint /settlements en backend.");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <Pressable style={styles.backBtn} onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={22} color="#e8eee9" />
            </Pressable>
  
            <View style={styles.portadaWrap}>
              <Image
                source={{uri:parsed.imagenUrl}}
                style={styles.portada}
              />
              <View style={styles.avatarOverlay}>
                <View style={styles.avatarCircle}>
                  <Ionicons name="wallet-outline" size={30} color={C.accent} />
                </View>
              </View>
            </View>
  
            <Text style={styles.title}>Gastos del grupo</Text>
  
            <Pressable
              style={[styles.card, { marginTop: 16 }]}
              onPress={() => console.log("Ir a detalles del viaje")}
            >
              {/* ...todo lo de info general... */}
            </Pressable>
  
            <View style={styles.card}>
              {/* ...Resumen... */}
            </View>
  
            <BalanceSummary
              balances={balances}
              participantsById={participantsById}
              onSettleDebt={() => setIsSettleModalOpen(true)}
            />
  
            <View style={{ width: "100%", alignItems: "center", marginTop: 12 }}>
              <Pressable
                style={styles.primaryBtn}
                onPress={() => {
                  setIsEditing(false);
                  setDraftTitle("");
                  setDraftAmount("");
                  setDraftPayer(participants[0]?.id ?? "");
                  setDraftSelected(participants.map((p) => p.id));
                  setEditExpenseId(null);
                  setIsCreateModalOpen(true);
                }}
              >
                <Text style={styles.primaryBtnText}>
                  <Ionicons name="add" size={16} color="#0F1310" /> Registrar nuevo
                  gasto
                </Text>
              </Pressable>
            </View>
  
            <Text style={styles.sectionTitle}>Movimientos</Text>
          </>
        }
        renderItem={({ item }) => (
          <View>
            <ExpenseCard
              expense={item}
              participantsById={participantsById}
              onEdit={onEditExpense}
            />
            <View
              style={{
                flexDirection: "row",
                gap: 8,
                justifyContent: "flex-end",
                paddingRight: 24,
                marginBottom: 8,
              }}
            >
              <Pressable onPress={() => onEditExpense(item.id)}>
                <Text style={{ color: C.accent }}>Editar</Text>
              </Pressable>
              <Pressable onPress={() => onDeleteExpense(item.id)}>
                <Text style={{ color: C.warning }}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.mutedCenter}>
            ¡Aún no hay gastos registrados! 💸
          </Text>
        }
      />

  

      {/* Modal crear/editar */}
      <Modal visible={isCreateModalOpen} animationType="slide" transparent onRequestClose={closeCreateModal}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{isEditing ? "Editar Gasto" : "Agregar Gasto"}</Text>
              <Pressable onPress={closeCreateModal}><Ionicons name="close" size={22} color="#e8eee9" /></Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 12 }}>
              <Text style={styles.label}>Descripción</Text>
              <TextInput value={draftTitle} onChangeText={setDraftTitle} placeholder="Ej: Pizza del viernes" placeholderTextColor="#6b746e" style={styles.input} />
              <Text style={styles.label}>Monto</Text>
              <TextInput value={draftAmount} onChangeText={setDraftAmount} placeholder="0" keyboardType="numeric" placeholderTextColor="#6b746e" style={styles.input} />

              <Text style={styles.label}>¿Quién pagó?</Text>
              <View style={styles.pillRow}>
                {participants.map((p) => (
                  <Pressable key={p.id} onPress={() => setDraftPayer(p.id)} style={[styles.pill, draftPayer === p.id && styles.pillActive]}>
                    <Text style={[styles.pillText, draftPayer === p.id && { color: C.accent }]}>{p.name}</Text>
                  </Pressable>
                ))}
              </View>

              <Text style={styles.label}>Participantes</Text>
              <View style={{ gap: 8 }}>
                {participants.map((p) => {
                  const checked = draftSelected.includes(p.id);
                  return (
                    <Pressable key={p.id} onPress={() => setDraftSelected((prev) => (checked ? prev.filter((id) => id !== p.id) : [...prev, p.id]))} style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                      <Ionicons name={checked ? "checkbox" : "square-outline"} size={20} color={checked ? C.accent : C.muted} />
                      <Text style={{ color: C.text }}>{p.name}</Text>
                    </Pressable>
                  );
                })}
              </View>

              <Pressable style={[styles.primaryBtn, { marginTop: 8 }]} onPress={onSaveExpense}>
                <Text style={styles.primaryBtnText}>{isEditing ? "Guardar Cambios" : "Guardar Gasto"}</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Modal saldar (simple) */}
      <Modal visible={isSettleModalOpen} animationType="slide" transparent onRequestClose={() => setIsSettleModalOpen(false)}>
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Saldar Deuda</Text>
              <Pressable onPress={() => setIsSettleModalOpen(false)}><Ionicons name="close" size={22} color="#e8eee9" /></Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 12 }}>
              <Text style={styles.label}>¿Quién paga?</Text>
              <View style={styles.pillRow}>
                {participants.map((p) => (
                  <Pressable key={p.id} onPress={() => setSettlePayerId(p.id)} style={[styles.pill, settlePayerId === p.id && styles.pillActive]}>
                    <Text style={[styles.pillText, settlePayerId === p.id && { color: C.accent }]}>{p.name}</Text>
                  </Pressable>
                ))}
              </View>

              <Text style={[styles.label, { marginTop: 8 }]}>¿Quién recibe?</Text>
              <View style={styles.pillRow}>
                {participants.map((p) => (
                  <Pressable key={p.id} onPress={() => setSettlePayeeId(p.id)} style={[styles.pill, settlePayeeId === p.id && styles.pillActive]}>
                    <Text style={[styles.pillText, settlePayeeId === p.id && { color: C.accent }]}>{p.name}</Text>
                  </Pressable>
                ))}
              </View>

              <Text style={styles.label}>Monto</Text>
              <TextInput value={settleAmount} onChangeText={setSettleAmount} keyboardType="numeric" placeholder="0.00" placeholderTextColor="#6b746e" style={styles.input} />

              <Pressable style={[styles.primaryBtn, { marginTop: 8 }]} onPress={onConfirmSettle}>
                <Text style={styles.primaryBtnText}>Confirmar Pago</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
      
      </SafeAreaView>
  );
}

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
  portada: { width: "100%", height: 160, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },
  avatarOverlay: { position: "absolute", bottom: -40, left: "50%", marginLeft: -40, overflow: "hidden" },
  avatarCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: C.card, borderWidth: 3, borderColor: C.bg, alignItems: "center", justifyContent: "center" },
  title: { marginTop: 12, fontSize: 22, fontWeight: "700", color: C.text, textAlign: "center" },
  card: { width: "90%", backgroundColor: C.card, borderRadius: 16, padding: 16, marginTop: 12, alignSelf: "center", borderWidth: 1, borderColor: C.border },
  cardTitle: { color: C.text, fontSize: 16, fontWeight: "700" },
  muted: { color: C.muted, fontSize: 14 },
  sectionTitle: { color: C.text, fontWeight: "700", fontSize: 16, marginTop: 18, marginBottom: 8, paddingHorizontal: 16 },
  expenseCard: { backgroundColor: C.card, borderRadius: 16, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: C.border },
  expenseHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 },
  expenseTitle: { fontSize: 16, fontWeight: "700", color: C.text },
  dateText: { fontSize: 12, color: C.muted },
  amount: { fontSize: 20, fontWeight: "800", color: C.accent },
  label: { fontSize: 13, color: C.text, fontWeight: "700" },
  input: { borderWidth: 1, borderColor: C.border, borderRadius: 10, paddingHorizontal: 12, paddingVertical: Platform.select({ ios: 10, android: 8 }), fontSize: 14, backgroundColor: "#0f1511", color: C.text, marginBottom: 10 },
  pillRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  pill: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 999, backgroundColor: "#2a322b", borderWidth: 1, borderColor: C.border },
  pillActive: { backgroundColor: "#233027", borderColor: C.accent },
  pillText: { fontSize: 13, color: C.text },
  primaryBtn: { backgroundColor: C.accent, paddingVertical: 12, borderRadius: 12, alignItems: "center" },
  primaryBtnText: { color: "#0F1310", fontWeight: "800", fontSize: 15 },
  modalBackdrop: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", padding: 16, justifyContent: "flex-end" },
  modalCard: { maxHeight: "88%", backgroundColor: C.card, borderRadius: 16, padding: 16, gap: 12, borderWidth: 1, borderColor: C.border },
  modalHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "800", color: C.text },
  topActionButtonContainer: { width: "90%", alignSelf: "center", marginTop: 16, marginBottom: 8 },
  mutedCenter: { color: C.muted, textAlign: "center", marginTop: 20 },
});