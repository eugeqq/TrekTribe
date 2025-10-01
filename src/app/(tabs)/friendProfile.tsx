import React from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function PerfilAmigoScreen() {
  // Datos estáticos del amigo
  const amigo = {
    nombre: "Ana",
    apellido: "Gómez",
    telefono: "+54 9 11 1234-5678",
    fechaNacimiento: "15/05/1995",
    dni: "12.345.678",
    apodo: "Anita",
    avatarUri: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    grupos: [
      { id: 1, nombre: "Trekking Patagonia" },
      { id: 2, nombre: "Viaje a Salta" },
    ],
  };

  const eliminarAmigo = () => {
    alert(`Se eliminará a ${amigo.nombre} de tus amigos`);
  };

  const irAGrupo = (nombre: string) => {
    alert(`Ir al grupo: ${nombre}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Avatar */}
        <View style={styles.avatarWrap}>
          <Image source={{ uri: amigo.avatarUri }} style={styles.avatar} />
        </View>

        {/* Datos del amigo */}
        <View style={styles.infoBox}>
          <InfoRow label="Nombre" value={amigo.nombre} />
          <InfoRow label="Apellido" value={amigo.apellido} />
          <InfoRow label="Teléfono" value={amigo.telefono} />
          <InfoRow label="Fecha de nacimiento" value={amigo.fechaNacimiento} />
          <InfoRow label="DNI" value={amigo.dni} />
          <InfoRow label="Apodo" value={amigo.apodo} />
        </View>

        {/* Grupos en común */}
        <View style={[styles.infoBox, { marginTop: 16 }]}>
          <Text style={styles.sectionTitle}>Grupos en común</Text>
          {amigo.grupos.map((grupo) => (
            <Pressable
              key={grupo.id}
              style={styles.groupButton}
              onPress={() => irAGrupo(grupo.nombre)}
            >
              <Text style={styles.groupButtonText}>{grupo.nombre}</Text>
            </Pressable>
          ))}
        </View>

        {/* Botón eliminar */}
        <Pressable style={styles.btnPrimary} onPress={eliminarAmigo}>
          <Text style={styles.btnPrimaryText}>Eliminar amigo</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

// --- Componente auxiliar para mostrar fila de información ---
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

// --- Estilos ---
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
  groupButtonText: {color: "#9ec39f", fontWeight: "600"},

  btnPrimary: {
    backgroundColor: "#993333",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 16 },
});

