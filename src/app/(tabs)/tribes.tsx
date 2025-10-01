import { useGlobalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

type Grupo = {
  nombre: string;
  ubicacion: string;
  miembros: number;
};

export default function GruposScreen() {
  const router = useRouter();
  const params = useGlobalSearchParams();

  const [grupos, setGrupos] = useState<Grupo[]>([
    { nombre: "Aventureros Andinos", ubicacion: "Mendoza", miembros: 5 },
    { nombre: "Exploradores Patagónicos", ubicacion: "Bariloche", miembros: 8 },
    { nombre: "Caminantes Urbanos", ubicacion: "Buenos Aires", miembros: 3 },
  ]);

  const [busqueda, setBusqueda] = useState("");

  // Si venimos de CrearGrupoScreen, agregamos el grupo nuevo
  useEffect(() => {
    if (params.nombre && params.ubicacion && params.miembros) {
      const nuevoGrupo: Grupo = {
        nombre: params.nombre as string,
        ubicacion: params.ubicacion as string,
        miembros: Number(params.miembros),
      };
      setGrupos((prev) => [nuevoGrupo, ...prev]);
    }
  }, [params]);

  const gruposFiltrados = grupos.filter((g) =>
    g.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const crearGrupo = () => {
    router.push("/createTribe"); // navegar a pantalla de crear grupo
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Barra de búsqueda + botón en fila */}
        <View style={styles.rowTop}>
          <TextInput
            placeholder="Buscar grupo..."
            placeholderTextColor="#9aa49d"
            value={busqueda}
            onChangeText={setBusqueda}
            style={styles.inputRow}
          />
          <Pressable style={styles.btnPrimaryRow} onPress={crearGrupo}>
            <Text style={styles.btnPrimaryText}>Crear grupo</Text>
          </Pressable>
        </View>

        {/* Lista de grupos */}
        {gruposFiltrados.map((grupo, index) => (
          <View key={index} style={styles.grupoCard}>
            <Text style={styles.grupoNombre}>{grupo.nombre}</Text>
            <Text style={styles.grupoInfo}>{grupo.ubicacion} • {grupo.miembros} miembros</Text>
          </View>
        ))}

        {gruposFiltrados.length === 0 && (
          <Text style={styles.noResults}>No se encontraron grupos</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: { padding: 16, gap: 16, alignItems: "center" },
  
  rowTop: {
    flexDirection: "row",
    width: "100%",
    gap: 8,
    marginBottom: 16,
  },
  inputRow: {
    flex: 1,
    backgroundColor: "#1a1f1b",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#2a322b",
    color: "#e8eee9",
    fontSize: 16,
  },
  btnPrimaryRow: {
    backgroundColor: "#4B5320",
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 16 },

  grupoCard: {
    width: "100%",
    backgroundColor: "#1a1f1b",
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#2a322b",
    marginBottom: 12,
  },
  grupoNombre: { color: "#e8eee9", fontSize: 16, fontWeight: "700", marginBottom: 4 },
  grupoInfo: { color: "#9aa49d", fontSize: 14 },
  noResults: { color: "#9aa49d", fontSize: 14, marginTop: 16 },
});
