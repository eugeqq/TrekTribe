import React, { useMemo, useState } from "react";
import { Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";


type Profile = {
  nombre: string;
  apellido: string;
  telefono: string;
  fechaNacimiento: string;
  dni: string;
  apodo: string;
  avatarUri?: string;
};

type FieldKey = keyof Omit<Profile, "avatarUri">;

const LABELS: Record<FieldKey, string> = {
  nombre: "Nombre",
  apellido: "Apellido",
  telefono: "Teléfono",
  fechaNacimiento: "Fecha de nacimiento",
  dni: "DNI",
  apodo: "Apodo",
};

const KEYBOARD: Partial<Record<FieldKey, "default" | "numeric" | "email-address" | "phone-pad">> = {
  telefono: "phone-pad",
  fechaNacimiento: "numeric",
  dni: "numeric",
};

export default function PerfilScreen() {
  const [data, setData] = useState<Profile>({
    nombre: "",
    apellido: "",
    telefono: "",
    fechaNacimiento: "",
    dni: "",
    apodo: "",
    avatarUri: undefined,
  });

  // Estado del modal genérico
  const [open, setOpen] = useState(false);
  const [field, setField] = useState<FieldKey | null>(null);
  const [tempValue, setTempValue] = useState("");

  const label = useMemo(() => (field ? LABELS[field] : ""), [field]);
  const kbType = useMemo(() => (field && KEYBOARD[field]) || "default", [field]);

  const onEdit = (k: FieldKey) => {
    setField(k);
    setTempValue(data[k] ?? "");
    setOpen(true);
  };

  const onSave = () => {
    if (!field) return;
    setData((prev) => ({ ...prev, [field]: tempValue }));
    setOpen(false);
  };

  const close = () => setOpen(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Avatar */}
        <Pressable style={styles.avatarWrap} onPress={() => {/* aquí luego: ImagePicker */}}>
          {data.avatarUri ? (
            <Image source={{ uri: data.avatarUri }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Text style={{ fontSize: 20, opacity: 0.6 }}>Añadir foto</Text>
            </View>
          )}
        </Pressable>

        {/* Campos editables */}
        <EditableRow label={LABELS.nombre} value={data.nombre} onPress={() => onEdit("nombre")} />
        <EditableRow label={LABELS.apellido} value={data.apellido} onPress={() => onEdit("apellido")} />
        <EditableRow label={LABELS.telefono} value={data.telefono} onPress={() => onEdit("telefono")} />
        <EditableRow label={LABELS.fechaNacimiento} value={data.fechaNacimiento} onPress={() => onEdit("fechaNacimiento")} />
        <EditableRow label={LABELS.dni} value={data.dni} onPress={() => onEdit("dni")} />
        <EditableRow label={LABELS.apodo} value={data.apodo} onPress={() => onEdit("apodo")} />
      </ScrollView>

      {/* Modal de edición por estado */}
      <Modal visible={open} animationType="slide" transparent onRequestClose={close}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Editar {label}</Text>
            <TextInput
              value={tempValue}
              onChangeText={setTempValue}
              placeholder={label}
              keyboardType={kbType}
              style={styles.input}
              autoFocus
            />
            <View style={styles.modalActions}>
              <Pressable style={[styles.btn, styles.btnGhost]} onPress={close}>
                <Text style={styles.btnGhostText}>Cancelar</Text>
              </Pressable>
              <Pressable style={[styles.btn, styles.btnPrimary]} onPress={onSave}>
                <Text style={styles.btnPrimaryText}>Guardar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// --- Componentes auxiliares ---
function EditableRow({ label, value, onPress }: { label: string; value?: string; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.row}>
      <View style={{ flex: 1 }}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value || "Completar"}</Text>
      </View>
      <Text style={styles.rowEdit}>Editar</Text>
    </Pressable>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: { padding: 16, gap: 12, alignItems: "center" },
  avatarWrap: { marginTop: 8, marginBottom: 12 },
  avatar: { width: 120, height: 120, borderRadius: 60, backgroundColor: "#222" },
  avatarPlaceholder: { justifyContent: "center", alignItems: "center" },
  row: {
    width: "100%",
    backgroundColor: "#1a1f1b",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#2a322b",
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rowLabel: { color: "#9aa49d", fontSize: 12, marginBottom: 4 },
  rowValue: { color: "#e8eee9", fontSize: 16, fontWeight: "600" },
  rowEdit: { color: "#9ec39f", fontSize: 14, fontWeight: "700" },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", padding: 20 },
  modalCard: { backgroundColor: "#0F1310", borderRadius: 20, padding: 16, borderWidth: 1, borderColor: "#2a322b" },
  modalTitle: { color: "#e8eee9", fontSize: 18, fontWeight: "700", marginBottom: 12 },
  input: {
    backgroundColor: "#1a1f1b",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#2a322b",
    color: "#e8eee9",
    fontSize: 16,
  },
  modalActions: { flexDirection: "row", gap: 12, justifyContent: "flex-end", marginTop: 16 },
  btn: { borderRadius: 12, paddingVertical: 10, paddingHorizontal: 16 },
  btnGhost: { borderWidth: 1, borderColor: "#2a322b" },
  btnGhostText: { color: "#e8eee9", fontWeight: "700" },
  btnPrimary: { backgroundColor: "#4B5320" },
  btnPrimaryText: { color: "white", fontWeight: "700" },
});

// -------------------------------------------------------
// Variante: reusar tu ModalUpdatePerfil existente
// Si ya tenés <ModalUpdatePerfil>, podés reemplazar el <Modal> anterior por:
// <ModalUpdatePerfil
//   name={tempValue}
//   open={open}
//   title={label}
//   keyboardType={kbType}
//   onCloseModal={() => setOpen(false)}
//   onSave={(v: string) => { setTempValue(v); onSave(); }}
// />
// Ajustá la API del componente según lo que exporte hoy.
