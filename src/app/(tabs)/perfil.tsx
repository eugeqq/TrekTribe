import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import EditableRow from "../../components/EditableRow";

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

  const [open, setOpen] = useState(false);
  const [field, setField] = useState<FieldKey | null>(null);
  const [tempValue, setTempValue] = useState("");
useEffect(() => {
  const loadUser = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) return;

      const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/user/${userId}`);
      const userData = await res.json();

      if (res.ok) {
        setData({
          nombre: userData.nombre || "",
          apellido: userData.apellido || "",
          telefono: userData.telefono || "",
          fechaNacimiento: userData.fechaNacimiento || "",
          dni: userData.dni || "",
          apodo: userData.apodo || "",
          avatarUri: userData.avatarUri || undefined,
        });
      } else {
        console.error("Error cargando usuario:", userData.error);
      }
    } catch (err) {
      console.error("Error de conexión:", err);
    }
  };

  loadUser();
}, []);

  const label = field ? LABELS[field] : "";
  const kbType = (field && KEYBOARD[field]) || "default";

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
        
        <Pressable style={styles.avatarWrap} onPress={() => {}}>
          {data.avatarUri ? (
            <Image source={{ uri: data.avatarUri }} style={styles.avatar} />
          ) : (
            <View style={[styles.avatar, styles.avatarPlaceholder]}>
              <Text style={{ fontSize: 20, opacity: 0.6 }}>Añadir foto</Text>
            </View>
          )}
        </Pressable>

        
        <EditableRow label={LABELS.nombre} value={data.nombre} onPress={() => onEdit("nombre")} />
        <EditableRow label={LABELS.apellido} value={data.apellido} onPress={() => onEdit("apellido")} />
        <EditableRow label={LABELS.telefono} value={data.telefono} onPress={() => onEdit("telefono")} />
        <EditableRow label={LABELS.fechaNacimiento} value={data.fechaNacimiento} onPress={() => onEdit("fechaNacimiento")} />
        <EditableRow label={LABELS.dni} value={data.dni} onPress={() => onEdit("dni")} />
        <EditableRow label={LABELS.apodo} value={data.apodo} onPress={() => onEdit("apodo")} />
      </ScrollView>

      
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


const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: { padding: 16, gap: 12, alignItems: "center" },
  avatarWrap: { marginTop: 8, marginBottom: 12 },
  avatar: { width: 120, height: 120, borderRadius: 60, backgroundColor: "#222" },
  avatarPlaceholder: { justifyContent: "center", alignItems: "center" },
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