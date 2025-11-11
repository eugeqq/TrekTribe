import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Alert,
    FlatList,
    Image,
    Modal,
    Platform,
    Pressable,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Grupo = {
    id: number;
    nombre: string;
  };
  
type Activity = {
  id: string;             
  title: string;
  description?: string;
  dateTime: string;       
  category?: string;
  location?: string;
};

function Chip({ label, color }: { label: string; color?: string }) {
  return (
    <View
      style={[
        styles.chip,
        color ? { backgroundColor: color + "30", borderColor: color } : {},
      ]}
    >
      <Text style={[styles.chipText, color ? { color: color } : {}]}>{label}</Text>
    </View>
  );
}

function LabeledInput(props: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "numeric";
}) {
  return (
    <View style={{ gap: 6 }}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="#6b746e"
        keyboardType={props.keyboardType}
        style={styles.input}
      />
    </View>
  );
}

const C = {
  bg: "#0F1310",
  card: "#1a1f1b",
  border: "#2a322b",
  text: "#e8eee9",
  muted: "#9aa49d",
  accent: "#9ec39f",
  delete: "#f06292",
};

async function safeJson(res: Response) {
    const text = await res.text();
    try { return text ? JSON.parse(text) : {}; } catch { return {}; }
  }

export default function ItineraryScreen() {
  const router = useRouter();
  const { viajeId, nombre } = useLocalSearchParams<{ viajeId?: string; nombre?: string }>();

  const API = process.env.EXPO_PUBLIC_API_URL;
  
  const [grupo, setGrupo] = useState<Grupo | null>({ id: Number(viajeId), nombre: nombre ?? "Grupo" });
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  // ---- Helpers ----
  const dateFormat = useCallback((iso: string) => {
    const d = new Date(iso);
    return d.toLocaleString("es-AR", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  const fetchActivities = useCallback(async () => {
    if (!API || !viajeId) return;
    try {
      setLoading(true);
        const res = await fetch(`${API}/viajes/${viajeId}/itinerario`);
        const data = await res.json();
        const rows: Activity[] = (Array.isArray(data) ? data : []).map((a: any) => ({
        id: String(a.id),
        title: a.titulo ?? "",               // 👈 titulo
        description: a.descripcion ?? "",    // 👈 descripcion
        dateTime: a.fechaHora ?? "",         // 👈 fechaHora (ISO)
        category: "",                        // 👈 no existe en modelo
        location: "",                        // 👈 no existe en modelo
        }));
        setActivities(rows);

    } catch (e: any) {
      console.error(e);
      Alert.alert("Error", "No se pudieron cargar las actividades.");
    } finally {
      setLoading(false);
    }
  }, [API, viajeId]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchActivities();
    setRefreshing(false);
  }, [fetchActivities]);

  useEffect(() => {
    (async () => {
      const uid = await AsyncStorage.getItem("userId");
      setUserId(uid);
    })();
  }, []);

  useEffect(() => {
    if (API && viajeId) fetchActivities();
  }, [API, viajeId, fetchActivities]);

  const openActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const openCreate = () => {
    const now = new Date();
    const isoLocal = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 16); // yyyy-MM-ddTHH:mm (sin segundos) para input rápido si quisieras usar un picker
    setSelectedActivity({
      id: "new",
      title: "",
      description: "",
      dateTime: isoLocal,
      category: "",
      location: "",
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedActivity(null);
    setIsModalOpen(false);
  };

  const validate = (a: Activity) => {
    if (!a.title?.trim()) return "Falta el título.";
    if (!a.dateTime?.trim()) return "Falta la fecha y hora.";
    return null;
  };

  const onSaveChanges = async () => {
    console.log("onSaveChanges click", {
      hasAPI: !!API,
      viajeId,
      hasSelected: !!selectedActivity,
    });
  
    if (!API || !viajeId || !selectedActivity) {
      Alert.alert(
        "Falta configuración",
        `API: ${API ?? "undefined"}\nviajeId: ${String(viajeId)}\nselectedActivity: ${selectedActivity ? "ok" : "null"}`
      );
      return;
    }

    setSaving(true);
    try {
      const payload = {
        titulo: selectedActivity.title?.trim(),
        descripcion: selectedActivity.description?.trim() || null,
        fechaHora: normalizeDate(selectedActivity.dateTime),
      };
  
      if (selectedActivity.id === "new") {
        const res = await fetch(`${API}/viajes/${viajeId}/itinerario`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      
        console.log("POST /viajes/:id/itinerario ->", res.status);
        if (!res.ok) {
          const txt = await res.text().catch(() => "");
          throw new Error(`POST itinerario ${res.status} ${txt}`);
        }
      
        const created = await safeJson(res);
        // si el backend no devuelve nada, created.id será undefined
        if (!created.id) {
          // hacemos refetch para garantizar persistencia real
          await fetchActivities();
        } else {
          const createdRow: Activity = {
            id: String(created.id),
            title: created.titulo ?? payload.titulo!,
            description: created.descripcion ?? payload.descripcion ?? "",
            dateTime: created.fechaHora ?? payload.fechaHora,
            category: "",
            location: "",
          };
          setActivities((prev) => [createdRow, ...prev]);
        }
      
        closeModal();
        Alert.alert("Listo", "Actividad creada");
      } else {
        const res = await fetch(`${API}/viajes/itinerario/${selectedActivity.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });      
        console.log("PUT /itinerario/:id ->", res.status);
        if (!res.ok) {
          const txt = await res.text().catch(() => "");
          throw new Error(`PUT itinerario ${res.status} ${txt}`);
        }
      
        const updated = await safeJson(res);
        if (!updated.id) {
          await fetchActivities();
        } else {
          setActivities((prev) =>
            prev.map((x) =>
              x.id === selectedActivity.id
                ? {
                    ...x,
                    id: String(updated.id ?? x.id),
                    title: updated.titulo ?? x.title,
                    description: updated.descripcion ?? x.description,
                    dateTime: updated.fechaHora ?? x.dateTime,
                  }
                : x
            )
          );
        }
      
        closeModal();
        Alert.alert("Listo", "Actividad actualizada");
      }
      
      
    } catch (e: any) {
      console.error(e);
      Alert.alert("Error", "No se pudieron guardar los cambios.");
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    if (!API || !viajeId) return;
    (async () => {
      try {
        const res = await fetch(`${API}/viajes/${viajeId}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const v = await res.json();
        // ajustá los nombres según tu API: nombre vs titulo, etc.
        setGrupo({ id: v.id, nombre: v.nombre ?? `#${viajeId}` });
      } catch (e) {
        console.error(e);
        setGrupo(null);
      }
    })();
  }, [API, viajeId]);
  

  const onDelete = (activity: Activity) => {
    Alert.alert("Eliminar", "¿Querés eliminar esta actividad?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          if (!API) return;
          const url = `${API}/viajes/itinerario/${activity.id}`;
          try {
            console.log("DELETE URL ->", url, "id:", activity.id);
  
            // Optimista: sacamos de UI
            setActivities(prev => prev.filter(x => x.id !== activity.id));
  
            const res = await fetch(url, { method: "DELETE" });
            console.log("DELETE status:", res.status);
  
            // si el back respondió JSON (como arriba), lo vemos:
            let payload: any = null;
            try { payload = await res.json(); } catch {}
            console.log("DELETE payload:", payload);
  
            if (!res.ok) {
              throw new Error(`HTTP ${res.status} ${payload?.error ?? ""}`);
            }
  
            // todo ok: opcional refetch para asegurar
            // await fetchActivities();
  
          } catch (e: any) {
            console.error("DELETE error:", e);
            Alert.alert("Error", "No se pudo eliminar. Recargando lista…");
            // revertir o refetchear
            fetchActivities();
          }
        },
      },
    ]);
  };
  

  // Normaliza: si viene "2025-12-01T20:30" lo convertimos a ISO con zona
  function normalizeDate(input: string) {
    if (/Z$/.test(input)) return input;
    const dt = new Date(input);
    if (!isNaN(dt.getTime())) return dt.toISOString();
    return input;
  }

  const headerSubtitle = useMemo(() => {
    // Sólo decorativo; podrías traer estas fechas desde el backend del viaje
    return "1 al 8 de Diciembre 2025";
  }, []);


  const nombreGrupo = grupo?.nombre ?? "Grupo";


  return (
    <SafeAreaView style={styles.safe}>
      <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
        <Ionicons name="chevron-back" size={22} color="#e8eee9" />
      </Pressable>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={C.accent} />}
      >
        <View style={styles.portadaWrap}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            }}
            style={styles.portada}
          />
          <View style={styles.avatarOverlay}>
            <View style={styles.avatarCircle}>
              <Ionicons name="map-outline" size={30} color="#9ec39f" />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Itinerario del Viaje</Text>

        <Pressable style={[styles.card, { marginTop: 16 }]} disabled>
            <Text style={styles.cardTitle}>Viaje {nombreGrupo}</Text>
            <Text style={styles.muted}>{headerSubtitle}</Text>
        </Pressable>

        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 16, marginTop: 12 }}>
          <Text style={styles.sectionTitle}>Actividades programadas</Text>
          <Pressable onPress={openCreate} style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Ionicons name="add-circle-outline" size={20} color={C.accent} />
            <Text style={{ color: C.accent, fontWeight: "700" }}>Nueva</Text>
          </Pressable>
        </View>

        <View style={{ paddingHorizontal: 16, marginTop: 8 }}>
          {loading ? (
            <Text style={[styles.muted, { textAlign: "center", marginVertical: 20 }]}>Cargando…</Text>
          ) : (
            <FlatList
              data={activities}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
// 👉 renderItem (tachito con stopPropagation y buen hitSlop)
renderItem={({ item }) => (
    <View style={styles.taskCard}>
      <View style={styles.taskContent}>
  
        {/* Fila superior: título (abre) + tachito (borra) */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          {/* Zona que abre el detalle */}
          <TouchableOpacity
            style={{ flex: 1, paddingRight: 12 }}
            onPress={() => {
              console.log("openActivity", item.id);
              openActivity(item);
            }}
            activeOpacity={0.7}
          >
            <Text style={styles.taskTitle}>{item.title}</Text>
          </TouchableOpacity>
  
          {/* Tachito: botón independiente */}
          <TouchableOpacity
            onPress={() => {
              console.log("trash pressed", item.id);
              onDelete(item);
            }}
            hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
            activeOpacity={0.6}
            accessibilityRole="button"
            accessibilityLabel="Eliminar actividad"
          >
            <Ionicons name="trash-outline" size={20} color={C.delete} />
          </TouchableOpacity>
        </View>
  
        {/* Contenido inferior: también abre detalle */}
        <TouchableOpacity
          onPress={() => {
            console.log("openActivity (row)", item.id);
            openActivity(item);
          }}
          activeOpacity={0.7}
        >
          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={16} color={C.muted} />
            <Text style={styles.rowText}>{dateFormat(item.dateTime)}</Text>
          </View>
  
          {item.location ? (
            <View style={styles.row}>
              <Ionicons name="location-outline" size={16} color={C.muted} />
              <Text style={styles.rowText}>{item.location}</Text>
            </View>
          ) : null}
  
          {item.category ? (
            <View style={styles.chips}>
              <Chip label={item.category} color={C.accent} />
            </View>
          ) : null}
        </TouchableOpacity>
  
      </View>
    </View>
  )}
  
  
              

              ListEmptyComponent={
                <Text style={[styles.muted, { textAlign: "center", marginVertical: 20 }]}>
                  No hay actividades registradas.
                </Text>
              }
            />
          )}
        </View>
      </ScrollView>

      {/* Modal Crear/Editar */}
      <Modal
        visible={isModalOpen}
        animationType="slide"
        transparent
        onRequestClose={() => (saving ? undefined : closeModal())}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {selectedActivity?.id === "new" ? "Nueva Actividad" : "Detalle de la Actividad"}
              </Text>
              <Pressable onPress={saving ? undefined : closeModal}>
                <Ionicons name="close" size={22} color="#e8eee9" />
              </Pressable>
            </View>

            {selectedActivity && (
              <ScrollView contentContainerStyle={{ gap: 12 }}>
                <LabeledInput
                  label="Título"
                  value={selectedActivity.title}
                  onChangeText={(t) => setSelectedActivity({ ...selectedActivity, title: t })}
                />
                <LabeledInput
                  label="Descripción"
                  value={selectedActivity.description || ""}
                  onChangeText={(t) => setSelectedActivity({ ...selectedActivity, description: t })}
                />
                <LabeledInput
                  label="Lugar"
                  value={selectedActivity.location || ""}
                  onChangeText={(t) => setSelectedActivity({ ...selectedActivity, location: t })}
                />
                <LabeledInput
                  label="Fecha y Hora (ISO/local)"
                  value={selectedActivity.dateTime}
                  onChangeText={(t) => setSelectedActivity({ ...selectedActivity, dateTime: t })}
                  placeholder="Ej: 2025-12-01T20:30"
                />
                <LabeledInput
                  label="Categoría"
                  value={selectedActivity.category || ""}
                  onChangeText={(t) => setSelectedActivity({ ...selectedActivity, category: t })}
                />

                <Pressable style={[styles.primaryBtn, saving && { opacity: 0.7 }]} onPress={onSaveChanges} disabled={saving}>
                  <Text style={styles.primaryBtnText}>{saving ? "Guardando..." : "Guardar Cambios"}</Text>
                </Pressable>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// ---------- Estilos (sin cambios fuertes) ----------
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  portadaWrap: { width: "100%", position: "relative", marginBottom: 60 },
  portada: {
    width: "100%",
    height: 160,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatarOverlay: {
    position: "absolute",
    bottom: -40,
    left: "50%",
    marginLeft: -40,
    overflow: "hidden",
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: C.card,
    borderWidth: 3,
    borderColor: C.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: 12,
    fontSize: 22,
    fontWeight: "700",
    color: C.text,
    textAlign: "center",
  },
  card: {
    width: "90%",
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: C.border,
  },
  cardTitle: { color: C.text, fontSize: 16, fontWeight: "700" },
  muted: { color: C.muted, fontSize: 14 },
  sectionTitle: {
    color: C.text,
    fontWeight: "700",
    fontSize: 16,
  },
  taskCard: {
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  taskContent: { flex: 1 },
  taskTitle: { fontSize: 16, fontWeight: "700", color: C.text, marginBottom: 4 },
  row: { flexDirection: "row", alignItems: "center", gap: 6, marginTop: 2 },
  rowText: { fontSize: 13, color: C.muted },
  chips: { marginTop: 8, flexDirection: "row", flexWrap: "wrap", gap: 6 },
  chip: {
    backgroundColor: "#233027",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: C.border,
  },
  chipText: { fontSize: 12, color: C.accent },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 16,
    justifyContent: "flex-end",
  },
  modalCard: {
    maxHeight: "88%",
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  modalHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  modalTitle: { fontSize: 18, fontWeight: "800", color: C.text },
  label: { fontSize: 13, color: C.text, fontWeight: "700" },
  input: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.select({ ios: 10, android: 8 }),
    fontSize: 14,
    backgroundColor: "#0f1511",
    color: C.text,
  },
  primaryBtn: {
    backgroundColor: C.accent,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryBtnText: { color: "#0F1310", fontWeight: "800", fontSize: 15 },
});
