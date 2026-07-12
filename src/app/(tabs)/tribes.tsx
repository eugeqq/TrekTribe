import AsyncStorage from "@react-native-async-storage/async-storage";
import { Image } from "react-native";

import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { authFetch } from "../../lib/authFetch";
import { API_URL } from "../../constants";
import { C } from "../../theme";

type Grupo = {
  id: number;
  nombre: string;
  ubicacion: string;
  miembrosCant: number;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  imagenUrl?: string;
};

// Cada cuánto se refresca sola la lista de tribus mientras la pestaña está
// abierta, para que aparezcan sin demora las tribus a las que te acaban de
// agregar como miembro (antes solo se cargaba una vez, al montar la pantalla).
const POLL_INTERVAL_MS = 5000;

export default function GruposScreen() {
  const router = useRouter();
  const [grupos, setGrupos] = useState<Grupo[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [loading, setLoading] = useState(true);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchGrupos = useCallback(async (silencioso = false) => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) {
        if (!silencioso) setGrupos([]);
        return;
      }

      const res = await authFetch(`${API_URL}/viajes/usuario/${userId}`);
      const data = await res.json();

      const normalizados: Grupo[] = (Array.isArray(data) ? data : []).map((v: any) => ({
        id: Number(v.id),
        nombre: v.nombre ?? "Sin nombre",
        ubicacion: v.ubicacion ?? "—",
        miembrosCant: Array.isArray(v.miembros) ? v.miembros.length : v.miembrosCant ?? 0,
        descripcion: v.descripcion ?? "",
        fechaInicio: v.fechaInicio ?? null,
        fechaFin: v.fechaFin ?? null,
        imagenUrl: v.imagenUrl ?? null,
      }));
      setGrupos(normalizados);
    } catch (error) {
      console.error("Error al cargar grupos:", error);
      if (!silencioso) setGrupos([]);
    } finally {
      if (!silencioso) setLoading(false);
    }
  }, []);

  // Recarga al entrar a la pestaña y sigue refrescando sola cada pocos
  // segundos mientras la tenés abierta (mismo patrón que la pestaña Chats),
  // así una tribu nueva (agregado como miembro por otra persona) aparece
  // sin tener que cerrar y reabrir la app.
  useFocusEffect(
    useCallback(() => {
      fetchGrupos(false);

      pollRef.current = setInterval(() => {
        fetchGrupos(true);
      }, POLL_INTERVAL_MS);

      return () => {
        if (pollRef.current) clearInterval(pollRef.current);
        pollRef.current = null;
      };
    }, [fetchGrupos])
  );

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
            placeholderTextColor={C.muted}
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
             <Image source={{ uri: grupo.imagenUrl || undefined }}
                style={{ width: 50, height: 50, borderRadius: 25 }}
              />
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
  safe: { flex: 1, backgroundColor: C.bg },
  container: { padding: 16, gap: 16, alignItems: "center" },
  rowTop: {
    flexDirection: "row",
    width: "100%",
    gap: 8,
    marginBottom: 16,
  },
  inputRow: {
    flex: 1,
    backgroundColor: C.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: C.border,
    color: C.text,
    fontSize: 16,
  },
  btnPrimaryRow: {
    backgroundColor: C.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 16 },
  grupoCard: {
    width: "100%",
    backgroundColor: C.card,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: C.border,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: C.border,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  grupoNombre: { color: C.text, fontSize: 16, fontWeight: "700" },
  grupoInfo: { color: C.muted, fontSize: 14 },
  noResults: { color: C.muted, fontSize: 14, marginTop: 16 },
});
