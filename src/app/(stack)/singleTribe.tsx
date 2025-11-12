import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

type Miembro = { id: string | number; nombre: string };
type Grupo = {
  id: string | number;
  nombre: string;
  ubicacion?: string;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  miembros?: Miembro[];
};

const toDDMMYYYY = (val?: string | number | Date | null) => {
  if (!val) return "—";
  if (typeof val === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(val)) return val;
  if (typeof val === "string" && /^\d{4}-\d{2}-\d{2}/.test(val)) {
    const [y, m, rest] = val.split("-");
    const d = rest.slice(0, 2);
    return `${d}/${m}/${y}`;
  }
  const d = new Date(val);
  if (isNaN(d.getTime())) return "—";
  return `${String(d.getDate()).padStart(2, "0")}/${String(d.getMonth() + 1).padStart(2, "0")}/${d.getFullYear()}`;
};

export default function GrupoScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string; grupo?: string }>();
  const idParam = params.id;
  const grupoParam = params.grupo;

  const [data, setData] = useState<Grupo | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        setLoading(true);
        setErr(null);

        if (grupoParam) {
          const parsed = JSON.parse(String(grupoParam));
          const miembros = Array.isArray(parsed.miembros)
            ? parsed.miembros.map((m: any, i: number) => ({
                id: m.id ?? i + 1,
                nombre: m.nombre ?? `Miembro ${i + 1}`,
              }))
            : [];
          const normalized: Grupo = {
            id: parsed.id,
            nombre: parsed.nombre,
            ubicacion: parsed.ubicacion,
            descripcion: parsed.descripcion,
            fechaInicio: parsed.fechaInicio,
            fechaFin: parsed.fechaFin,
            miembros,
          };
          if (!cancel) setData(normalized);
          return;
        }

        if (!idParam) throw new Error("Falta el id del grupo");

        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/viajes/detalle/${idParam}`);
        const json = await res.json();
        const miembros = Array.isArray(json.miembros)
          ? json.miembros.map((m: any, i: number) => ({
              id: m.id ?? i + 1,
              nombre: m.nombre ?? `Miembro ${i + 1}`,
            }))
          : [];
        const normalized: Grupo = {
          id: json.id,
          nombre: json.nombre,
          ubicacion: json.ubicacion,
          descripcion: json.descripcion,
          fechaInicio: json.fechaInicio,
          fechaFin: json.fechaFin,
          miembros,
        };
        if (!cancel) setData(normalized);
      } catch (e: any) {
        if (!cancel) setErr(String(e.message ?? e));
      } finally {
        if (!cancel) setLoading(false);
      }
    })();
    return () => {
      cancel = true;
    };
  }, [idParam, grupoParam]);

  if (loading)
    return (
      <SafeAreaView style={styles.safe}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator />
          <Text style={{ color: "#e8eee9", marginTop: 8 }}>Cargando grupo…</Text>
        </View>
      </SafeAreaView>
    );

  if (err || !data)
    return (
      <SafeAreaView style={styles.safe}>
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#e8eee9" />
        </Pressable>
        <View style={{ padding: 16 }}>
          <Text style={{ color: "#ff8a8a" }}>No se pudo cargar el grupo: {err ?? "Sin datos"}</Text>
        </View>
      </SafeAreaView>
    );

  const { nombre, ubicacion, descripcion, fechaInicio, fechaFin, miembros = [] } = data;

  return (
    <SafeAreaView style={styles.safe}>
      <Pressable style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color="#e8eee9" />
      </Pressable>

      <ScrollView contentContainerStyle={styles.container}>
        
        <View style={styles.iconWrap}>
          <Ionicons name="people-circle-outline" size={100} color="#9ec39f" />
        </View>

        <Text style={styles.groupName}>{nombre ?? "Grupo"}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{descripcion ?? "Descripción no disponible."}</Text>
          <Text style={styles.infoSubText}>Ubicación: {ubicacion ?? "—"}</Text>
          <Text style={styles.infoSubText}>
            Fechas: {toDDMMYYYY(fechaInicio)} - {toDDMMYYYY(fechaFin)}
          </Text>
          <Text style={styles.infoSubText}>Total miembros: {miembros.length}</Text>

          <Text style={[styles.infoSubText, { marginTop: 8 }]}>Miembros:</Text>
          <View style={styles.membersRow}>
            {miembros.map((m) => (
              <Pressable
                key={String(m.id ?? m.nombre)}
                style={styles.memberButton}
                onPress={() =>
                  router.push({
                    pathname: "/(stack)/friendProfile",
                    params: { nombre: m.nombre },
                  })
                }
              >
                <Text style={styles.memberName}>{m.nombre}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <Link href={{ pathname: "/(stack)/expenses", params: { grupo: JSON.stringify(data) } }} asChild>
            <Pressable style={styles.funcButton}>
              <Text style={styles.funcButtonText}>Gastos</Text>
            </Pressable>
          </Link>

          <Link href={{ pathname: "/(stack)/toDos", params: { groupId: String(data.id) } }} asChild>
            <Pressable style={styles.funcButton}>
              <Text style={styles.funcButtonText}>Tareas</Text>
            </Pressable>
          </Link>

          <Link href={{ pathname: "/(stack)/itinerary", params: { viajeId: String(data.id), nombre: data.nombre } }} asChild>
            <Pressable style={styles.funcButton}>
              <Text style={styles.funcButtonText}>Itinerario</Text>
            </Pressable>
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: { alignItems: "center", paddingBottom: 30 },
  iconWrap: { marginTop: 60, marginBottom: 20 },
  groupName: { fontSize: 22, fontWeight: "700", color: "#e8eee9", textAlign: "center" },
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
  funcButtonText: { color: "#e8eee9", fontWeight: "600" },
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
  },
});
