import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

type Miembro = { id: string | number; nombre: string };
type Grupo = {
  id: string | number;
  nombre: string;
  ubicacion?: string;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  imagenUrl?: string;   
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

  // Modal & search state for adding members (declared unconditionally to preserve hook order)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searching, setSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<any>>([]);
  const [adding, setAdding] = useState(false);
  const API = process.env.EXPO_PUBLIC_API_URL;

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
                id: m.usuario?.id ?? m.id ?? i + 1,
                nombre: m.usuario?.nombre ?? `Miembro ${i + 1}`,
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
          imagenUrl: json.imagenUrl,  
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

  async function searchUsers() {
    if (!API || !searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    setSearching(true);
    try {
      console.log("Searching users with query:", searchQuery);
      const res = await fetch(`${API}/user/email/${encodeURIComponent(searchQuery)}`);
      console.log("searchUsers response:", res);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const j = await res.json();
      console.log("searchUsers data:", j);
      // Aceptar respuestas: array directo, objeto usuario, o { results: [] } / { data: [] }
      let arr: any[] = [];
      if (Array.isArray(j)) arr = j;
      else if (Array.isArray(j.results)) arr = j.results;
      else if (Array.isArray(j.data)) arr = j.data;
      else if (j && typeof j === "object" && (j.id || j.email || j.nombre)) arr = [j];
      setSearchResults(arr);
    } catch (e) {
      console.error("searchUsers error", e);
      if (e instanceof Error && e.message.includes("400")) {
        Alert.alert("Error", "Ingresa un email válido");
      } else {
        Alert.alert("Error", "No se pudieron buscar usuarios");
      }
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  }

  async function addMember(user: any) {
    if (!API || !idParam) return;
    setAdding(true);
    try {
      const currentUserId = await AsyncStorage.getItem("userId");
      const res = await fetch(`${API}/viajes/${idParam}/miembros`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUserId: Number(currentUserId), usuarioId: user.id }),
      });
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || `Error ${res.status}`);
      }
      const created = await res.json().catch(() => ({}));
      const newMember = { id: created.id ?? user.id, nombre: created.nombre ?? user.nombre };
      setData((prev) => (prev ? { ...prev, miembros: [...(prev.miembros || []), newMember] } : prev));
      setIsAddModalOpen(false);
      setSearchQuery("");
      setSearchResults([]);
    } catch (e) {
      console.error("addMember error", e);
      Alert.alert("Error", "No se pudo agregar el miembro");
    } finally {
      setAdding(false);
    }
  }

  return (
    <SafeAreaView style={styles.safe}>


      <ScrollView contentContainerStyle={styles.container}>

        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color="#e8eee9" />
        </Pressable>
        
        <View style={styles.iconWrap}>
          <Image source={{ uri: data.imagenUrl }}
            style={{
            width: 100, 
            height: 100, 
            borderRadius: 50, 
            borderWidth: 2, 
            borderColor: "#2a322b",
    }}
  />
        </View>
        
        {/* Modal: Agregar amigo */}
        <Modal visible={isAddModalOpen} transparent animationType="slide" onRequestClose={() => setIsAddModalOpen(false)}>
          <View style={styles.modalBackdrop}>
            <View style={styles.modalCard}>
              <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={styles.modalTitle}>Agregar amigo</Text>
                <Pressable onPress={() => setIsAddModalOpen(false)}>
                  <Ionicons name="close" size={20} color="#111" />
                </Pressable>
              </View>

              <TextInput
                placeholder="Buscar por email"
                placeholderTextColor="#6b746e"
                value={searchQuery}
                onChangeText={setSearchQuery}
                style={styles.searchInput}
              />

              <Pressable style={styles.searchBtn} onPress={() => searchUsers()} disabled={searching}>
                <Text style={{ color: "#fff", fontWeight: "700" }}>{searching ? "Buscando..." : "Buscar"}</Text>
              </Pressable>

              <View style={{ marginTop: 12, maxHeight: 220 }}>
                {searching ? (
                  <View style={{ alignItems: "center" }}>
                    <ActivityIndicator />
                    <Text style={{ color: "#9aa49d", marginTop: 8 }}>Buscando…</Text>
                  </View>
                ) : searchResults.length === 0 ? (
                  <Text style={{ color: "#333" }}>No hay resultados</Text>
                ) : (
                  searchResults.map((u: any) => (
                    <Pressable
                      key={String(u.id)}
                      style={styles.searchRowPressable}
                      onPress={() => {
                        Alert.alert(
                          "Agregar miembro",
                          `${u.nombre || u.email || "Usuario"}\n${u.email ? u.email : ""}`,
                          [
                            { text: "Cancelar", style: "cancel" },
                            { text: "Agregar", onPress: () => addMember(u) },
                          ]
                        );
                      }}
                      disabled={adding}
                    >
                      <View>
                        <Text style={{ color: "#111", fontWeight: "700" }}>{u.nombre || u.email || "Usuario"}</Text>
                        {u.email ? <Text style={{ color: "#444", fontSize: 13 }}>{u.email}</Text> : null}
                      </View>
                      <Text style={{ color: "#4B5320", fontWeight: "700" }}>{adding ? "..." : "Seleccionar"}</Text>
                    </Pressable>
                  ))
                )}
              </View>
            </View>
          </View>
        </Modal>

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
                    params: { id: String(m.id), nombre: m.nombre },
                  })
                }
              >
                <Text style={styles.memberName}>{m.nombre}</Text>
              </Pressable>
            ))}
            {/* Botón para agregar miembro */}
            <Pressable style={[styles.memberButton, styles.addMemberButton]} onPress={() => setIsAddModalOpen(true)}>
              <Text style={[styles.memberName, { fontSize: 20 }]}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <Link href={{ pathname: "/(stack)/expenses", params: { grupo: JSON.stringify(data) } }} asChild>
            <Pressable style={styles.funcButton}>
              <Text style={styles.funcButtonText}>Gastos</Text>
            </Pressable>
          </Link>

          <Link href={{ pathname: "/(stack)/toDos", params: { groupId: String(data.id) , imagenUrl: data.imagenUrl} }} asChild>
            <Pressable style={styles.funcButton}>
              <Text style={styles.funcButtonText}>Tareas</Text>
            </Pressable>
          </Link>

          <Link href={{ pathname: "/(stack)/itinerary", params: { viajeId: String(data.id), nombre: data.nombre, imagenUrl: data.imagenUrl, } }} asChild>
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
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 16,
    justifyContent: "center",
  },
  modalCard: {
    backgroundColor: "#eef7ee",
    borderRadius: 12,
    padding: 16,
  },
  modalTitle: { fontSize: 18, fontWeight: "800", color: "#111" },
  searchInput: {
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 12,
    color: "#111",
  },
  searchBtn: { backgroundColor: "#4B5320", padding: 10, borderRadius: 8, alignItems: "center", marginTop: 8 },
  searchRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 8 },
  addBtn: { backgroundColor: "#4B5320", paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8 },
  addMemberButton: { backgroundColor: "#2a322b", borderStyle: "dashed", borderWidth: 1, borderColor: "#2a322b" },
  searchRowPressable: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e6e6e0",
  },
});
