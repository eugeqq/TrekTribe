import React, { useMemo, useState } from "react";
import {
  FlatList,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Participant = { id: string; name: string; avatar?: string };
type Expense = {
  id: string;
  title: string;
  amount: number;
  payerId: string;
  createdAt: string;
  participants: string[]; 
  category?: string;
};

const MOCK_PARTICIPANTS: Participant[] = [
  { id: "u1", name: "Ana" },
  { id: "u2", name: "Bruno" },
  { id: "u3", name: "Carla" },
  { id: "u4", name: "Diego" },
];

const MOCK_EXPENSES: Expense[] = [
  {
    id: "e1",
    title: "Supermercado",
    amount: 18450,
    payerId: "u2",
    createdAt: "2025-10-09T13:45:00Z",
    participants: ["u1", "u2", "u3", "u4"],
    category: "Comida",
  },
  {
    id: "e2",
    title: "Nafta viaje",
    amount: 32000,
    payerId: "u1",
    createdAt: "2025-10-08T19:12:00Z",
    participants: ["u1", "u2", "u3"],
    category: "Transporte",
  },
];

export default function ExpensesScreen() {
  const router = useRouter();

  // estado solo para la UI (fachada)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftAmount, setDraftAmount] = useState("");
  const [draftPayer, setDraftPayer] = useState(MOCK_PARTICIPANTS[0].id);
  const [draftSplitMode, setDraftSplitMode] = useState<"equal" | "custom">("equal");
  const [draftSelected, setDraftSelected] = useState<string[]>(
    MOCK_PARTICIPANTS.map((p) => p.id)
  );

  const expenses = MOCK_EXPENSES;
  const participantsById = useMemo(
    () => Object.fromEntries(MOCK_PARTICIPANTS.map((p) => [p.id, p] as const)),
    []
  );

  return (
    <SafeAreaView style={styles.safe}>
      {/* Back flotante como en GrupoScreen */}


      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
            <Ionicons name="chevron-back" size={22} color="#e8eee9" />
        </Pressable>
        {/* Portada + avatar para mantener el look&feel */}
        <View style={styles.portadaWrap}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }}
            style={styles.portada}
          />
          <View style={styles.avatarOverlay}>
            <View style={styles.avatarCircle}>
              <Ionicons name="wallet-outline" size={30} color="#9ec39f" />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Gastos del grupo</Text>

        {/* Resumen */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Resumen</Text>
          <View style={{ height: 8 }} />
          <Text style={styles.muted}>Participantes: {MOCK_PARTICIPANTS.length}</Text>
          <Text style={styles.muted}>
            Total (mock): ${" "}
            {expenses.reduce((acc, e) => acc + e.amount, 0).toLocaleString("es-AR")}
          </Text>
        </View>

        {/* Lista de movimientos */}
        <Text style={styles.sectionTitle}>Movimientos</Text>
        <FlatList
          data={expenses}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => {
            const perHead = item.amount / item.participants.length;
            const payer = participantsById[item.payerId]?.name ?? "—";
            return (
              <View style={styles.expenseCard}>
                <View style={styles.expenseHeader}>
                  <Text style={styles.expenseTitle}>{item.title}</Text>
                  <Text style={styles.amount}>${item.amount.toLocaleString("es-AR")}</Text>
                </View>
                <View style={styles.row}>
                  <Ionicons name="person-circle-outline" size={16} color="#9aa49d" />
                  <Text style={styles.rowText}>Pagó: {payer}</Text>
                </View>
                <View style={styles.row}>
                  <Ionicons name="people-outline" size={16} color="#9aa49d" />
                  <Text style={styles.rowText}>
                    {item.participants.length} participantes · ${perHead.toFixed(2)} c/u (mock)
                  </Text>
                </View>
                {item.category ? (
                  <View style={styles.chips}>
                    <Chip label={item.category} />
                  </View>
                ) : null}
              </View>
            );
          }}
          ListFooterComponent={<View style={{ height: 8 }} />}
        />
      </ScrollView>

      {/* FAB acorde al tema */}
      <Pressable style={styles.fab} onPress={() => setIsModalOpen(true)}>
        <Ionicons name="add" size={28} color="#0F1310" />
      </Pressable>

      {/* Modal oscuro */}
      <Modal
        visible={isModalOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setIsModalOpen(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Agregar gasto</Text>
              <Pressable onPress={() => setIsModalOpen(false)}>
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
                      {mode === "equal" ? "En partes iguales" : "Personalizado"}
                    </Text>
                  </Pressable>
                ))}
              </View>

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
                        color={checked ? "#9ec39f" : "#9aa49d"}
                      />
                      <Text style={styles.checkText}>{p.name}</Text>
                    </Pressable>
                  );
                })}
              </View>

              <View style={{ height: 12 }} />
              <Pressable style={[styles.primaryBtn, { opacity: 0.6 }]} disabled>
                <Text style={styles.primaryBtnText}>Guardar (próximamente)</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <View style={styles.chip}>
      <Text style={styles.chipText}>{label}</Text>
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

const C = {
  bg: "#0F1310",
  card: "#1a1f1b",
  border: "#2a322b",
  text: "#e8eee9",
  muted: "#9aa49d",
  accent: "#9ec39f",
  fab: "#9ec39f",
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
    // sombrita sutil
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

  sectionTitle: {
    color: C.text,
    fontWeight: "700",
    fontSize: 16,
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: 16,
  },

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
  expenseTitle: { fontSize: 16, fontWeight: "700", color: C.text },
  amount: { fontSize: 16, fontWeight: "800", color: C.accent },
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

  fab: {
    position: "absolute",
    right: 20,
    bottom: 28,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: C.fab,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  },

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

  primaryBtn: {
    backgroundColor: C.accent,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
  },
  primaryBtnText: { color: "#0F1310", fontWeight: "800", fontSize: 15 },
});
