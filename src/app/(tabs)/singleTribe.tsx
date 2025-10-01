import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function GrupoScreen() {
  const router = useRouter();

  const handlePress = (funcionalidad: string) => {
    alert(`Ir a: ${funcionalidad}`);
  };

  const handlePerfilMiembro = (nombre: string) => {
    alert(`Ir al perfil de: ${nombre}`);
  };

  // Datos de ejemplo
  const descripcion = "Un viaje increíble a la Patagonia, explorando montañas y lagos.";
  const ubicacion = "Bariloche, Argentina";
  const fechaInicio = "10/11/2025";
  const fechaFin = "20/11/2025";
  const miembros = ["Ana", "Luis", "Martín", "Sofía"];

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Portada */}
        <View style={styles.portadaWrap}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }}
            style={styles.portada}
          />

          {/* Avatar circular */}
          <View style={styles.avatarOverlay}>
            <Image
              source={{ uri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" }}
              style={styles.avatar}
            />
          </View>
        </View>

        {/* Nombre del grupo */}
        <Text style={styles.groupName}>Exploradores Patagonicos</Text>

        {/* Descripción, ubicación, fechas, miembros */}
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{descripcion}</Text>
          <Text style={styles.infoSubText}>Ubicación: {ubicacion}</Text>
          <Text style={styles.infoSubText}>Fechas: {fechaInicio} - {fechaFin}</Text>

          <Text style={[styles.infoSubText, { marginTop: 8 }]}>Miembros:</Text>
          <View style={styles.membersRow}>
            {miembros.map((m) => (
              <Pressable
                key={m}
                style={styles.memberButton}
                onPress={() => handlePerfilMiembro(m)}
              >
                <Text style={styles.memberName}>{m}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Botones de funcionalidades */}
        <View style={styles.buttonsRow}>
          {[
            "Gastos",
            "Tareas",
            "Chat",
            "Mapas",
            "Documentos",
            "Itinerario",
          ].map((func) => (
            <Pressable
              key={func}
              style={styles.funcButton}
              onPress={() => handlePress(func)}
            >
              <Text style={styles.funcButtonText}>{func}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: { alignItems: "center", paddingBottom: 30 },

  portadaWrap: { width: "100%", position: "relative", marginBottom: 60 },
  portada: { width: "100%", height: 180, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },

  avatarOverlay: {
    position: "absolute",
    bottom: -40,
    left: "50%",
    marginLeft: -40,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#0F1310",
    overflow: "hidden",
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },

  groupName: { marginTop: 12, fontSize: 22, fontWeight: "700", color: "#e8eee9", textAlign: "center" },

  infoBox: {
    width: "90%",
    backgroundColor: "#1a1f1b",
    borderRadius: 16,
    padding: 16,
    marginTop: 8,
  },
  infoText: { color: "#e8eee9", fontSize: 16, marginBottom: 8 },
  infoSubText: { color: "#9aa49d", fontSize: 14 },

  membersRow: { flexDirection: "row", flexWrap: "wrap", marginTop: 4 },
  memberButton: {
    backgroundColor: "#2a322b",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  memberName: { color: "#9ec39f", fontWeight: "600", textAlign: "center" },

  buttonsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
    gap: 12,
  },
  funcButton: {
    backgroundColor: "#1a1f1b",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a322b",
    minWidth: 100,
    alignItems: "center",
  },
  funcButtonText: { color: "#e8eee9", fontWeight: "600", textAlign: "center" },
});
