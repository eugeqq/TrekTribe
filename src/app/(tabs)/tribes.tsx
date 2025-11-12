import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

type Grupo = {
  id: number;
  nombre: string;
  ubicacion: string;
  miembrosCant: number;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
};

export default function GruposScreen() {
  const router = useRouter();
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGrupos = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (!userId) return setGrupos([]);

        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/viajes/usuario/${userId}`);
        const data = await res.json();

        const normalizados: Grupo[] = (Array.isArray(data) ? data : []).map((v: any) => ({
          id: Number(v.id),
          nombre: v.nombre ?? "Sin nombre",
          ubicacion: v.ubicacion ?? "—",
          miembrosCant: Array.isArray(v.miembros) ? v.miembros.length : v.miembrosCant ?? 0,
          descripcion: v.descripcion ?? "",
          fechaInicio: v.fechaInicio ?? null,
          fechaFin: v.fechaFin ?? null,
        }));
        setGrupos(normalizados);
      } catch (error) {
        console.error("Error al cargar grupos:", error);
        setGrupos([]);
      } finally {
        setLoading(false);
      }
    };
    fetchGrupos();
  }, []);

  const gruposFiltrados = grupos.filter((g) => (g.nombre ?? "").toLowerCase().includes(busqueda.toLowerCase()));
  const crearGrupo = () => router.push("/(stack)/createTribe");

  if (loading)
    return (
      <SafeAreaView style={styles.safe}>
        <Text style={{ color: "white", textAlign: "center", marginTop: 50 }}>Cargando grupos...</Text>
      </SafeAreaView>
    );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
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

        {gruposFiltrados.map((grupo) => (
          <Pressable
            key={grupo.id}
            style={styles.grupoCard}
            onPress={() =>
              router.push({
                pathname: "/(stack)/singleTribe",
                params: { id: String(grupo.id) },
              })
            }
          >
            <View style={styles.iconCircle}>
              <Ionicons name="people-outline" size={28} color="#9ec39f" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.grupoNombre}>{grupo.nombre}</Text>
              <Text style={styles.grupoInfo}>
                {grupo.ubicacion} • {grupo.miembrosCant} miembros
              </Text>
            </View>
          </Pressable>
        ))}

        {gruposFiltrados.length === 0 && <Text style={styles.noResults}>No se encontraron grupos</Text>}
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
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#2a322b",
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#2a322b",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  grupoNombre: { color: "#e8eee9", fontSize: 16, fontWeight: "700" },
  grupoInfo: { color: "#9aa49d", fontSize: 14 },
  noResults: { color: "#9aa49d", fontSize: 14, marginTop: 16 },
});
