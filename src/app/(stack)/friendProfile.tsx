import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Grupo = { id: number; nombre: string };

export default function PerfilAmigoScreen() {
  const raw = useLocalSearchParams<{
    nombre?: string;
    apellido?: string;
    telefono?: string;
    fechaNacimiento?: string;
    dni?: string;
    apodo?: string;
    avatarUri?: string;
    grupos?: string; // JSON string de Grupo[]
  }>();

  // Fallbacks seguros
  const nombre          = raw.nombre ?? "Invitado";
  const apellido        = raw.apellido ?? "";
  const telefono        = raw.telefono ?? "—";
  const fechaNacimiento = raw.fechaNacimiento ?? "—";
  const dni             = raw.dni ?? "—";
  const apodo           = raw.apodo ?? "";
  const avatarUri       =
    raw.avatarUri && raw.avatarUri.length
      ? raw.avatarUri
      : "https://i.pravatar.cc/200";

  // Parsear grupos si vinieron en JSON
  let grupos: Grupo[] = [];
  try {
    if (raw.grupos) {
      const parsed = JSON.parse(String(raw.grupos));
      if (Array.isArray(parsed)) {
        grupos = parsed as Grupo[];
      }
    }
  } catch {
    // deja grupos vacío
  }

  const eliminarAmigo = () => {
    alert(`Se eliminará a ${nombre} de tus amigos`);
  };

  const irAGrupo = (nombreGrupo: string) => {
    // navegá a tu detalle de grupo por nombre o id si lo tenés
    alert(`Ir al grupo: ${nombreGrupo}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={22} color="#e8eee9" />
        </Pressable>
        {/* Avatar */}
        <View style={styles.avatarWrap}>
          <Image source={{ uri: avatarUri }} style={styles.avatar} />
        </View>

        {/* Datos del amigo */}
        <View style={styles.infoBox}>
          <InfoRow label="Nombre" value={nombre} />
          {!!apellido && <InfoRow label="Apellido" value={apellido} />}
          <InfoRow label="Teléfono" value={telefono} />
          <InfoRow label="Fecha de nacimiento" value={fechaNacimiento} />
          <InfoRow label="DNI" value={dni} />
          {!!apodo && <InfoRow label="Apodo" value={apodo} />}
        </View>

        {/* Grupos en común */}
        <View style={[styles.infoBox, { marginTop: 16 }]}>
          <Text style={styles.sectionTitle}>Grupos en común</Text>
          {grupos.length === 0 ? (
            <Text style={{ color: "#9aa49d" }}>Sin grupos</Text>
          ) : (
            grupos.map((g) => (
              <Pressable key={g.id} style={styles.groupButton} onPress={() => irAGrupo(g.nombre)}>
                <Text style={styles.groupButtonText}>{g.nombre}</Text>
              </Pressable>
            ))
          )}
        </View>

        {/* Botón eliminar */}
        <Pressable style={styles.btnPrimary} onPress={eliminarAmigo}>
          <Text style={styles.btnPrimaryText}>Eliminar amigo</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Componente auxiliar ---
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

// --- Estilos (tus mismos colores) ---
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: { padding: 16, gap: 16, alignItems: "center" },

  avatarWrap: { marginTop: 16, marginBottom: 12 },
  avatar: { width: 120, height: 120, borderRadius: 60, backgroundColor: "#222" },

  infoBox: {
    width: "100%",
    backgroundColor: "#1a1f1b",
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  rowLabel: { color: "#9aa49d", fontSize: 14, fontWeight: "600" },
  rowValue: { color: "#e8eee9", fontSize: 16, fontWeight: "700" },

  sectionTitle: { color: "#9aa49d", fontWeight: "500", fontSize: 16, marginBottom: 8 },

  groupButton: {
    backgroundColor: "#2a322b",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  groupButtonText: { color: "#9ec39f", fontWeight: "600" },

  btnPrimary: {
    backgroundColor: "#993333",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 16 },
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
  
});
