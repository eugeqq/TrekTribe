import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Linking,
  Modal,
  Platform,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DateField from "../../components/DateField";
import LabeledInput from "../../components/LabeledInput";
import { API_URL as API } from "../../constants";
import { authFetch } from "../../lib/authFetch";
import { safeJson } from "../../lib/safeJson";
import { C } from "../../theme";
import { TribeRouteParams } from "../../types/routeParams";

type Grupo = {
    id: number;
    nombre: string;
    imagenUrl?: string;   
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

// Convierte DD/MM/AAAA a ISO manteniendo hora actual
function ddmmyyyyToIso(ddmmyyyy: string, isoWithTime: string): string {
  const m = ddmmyyyy.match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/);
  if (!m) return isoWithTime;
  const dd = m[1];
  const mm = m[2];
  const yyyy = m[3];
  // Extraer hora del ISO anterior (o usar 00:00)
  const timeMatch = isoWithTime.match(/T([0-9]{2}):([0-9]{2})/);
  const hh = timeMatch ? timeMatch[1] : "00";
  const mi = timeMatch ? timeMatch[2] : "00";
  return `${yyyy}-${mm}-${dd}T${hh}:${mi}`;
}

// Convierte ISO a DD/MM/AAAA
function isoToDdmmyyyy(iso: string): string {
  const m = iso.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})/);
  if (!m) return "";
  return `${m[3]}/${m[2]}/${m[1]}`;
}

// Abre la ubicación (texto libre: nombre de lugar, dirección, etc.) en
// Google Maps usando el formato de búsqueda oficial de la Maps URL API.
function openInMaps(ubicacion: string) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ubicacion)}`;
  Linking.openURL(url).catch((err) => {
    console.error("No se pudo abrir Google Maps:", err);
    Alert.alert("Error", "No se pudo abrir Google Maps.");
  });
}

export default function ItineraryScreen() {
  
  const router = useRouter();
  const { viajeId, nombre, imagenUrl } = useLocalSearchParams<TribeRouteParams & { imagenUrl?: string }>();
  
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
    if (isNaN(d.getTime())) return "—";
    const dd = String(d.getDate()).padStart(2, "0");
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, "0");
    const mi = String(d.getMinutes()).padStart(2, "0");
    return `${dd}/${mm}/${yyyy} ${hh}:${mi}`; // 👈 dd/mm/aaaa HH:MM
  }, []);

  const fetchActivities = useCallback(async () => {
    if (!API || !viajeId) return;
    try {
      setLoading(true);
        const res = await authFetch(`${API}/viajes/${viajeId}/itinerario`);
        const data = await res.json();
        const rows: Activity[] = (Array.isArray(data) ? data : []).map((a: any) => ({
        id: String(a.id),
        title: a.titulo ?? "",               // 👈 titulo
        description: a.descripcion ?? "",    // 👈 descripcion
        dateTime: a.fechaHora ?? "",         // 👈 fechaHora (ISO)
        category: "",                        // 👈 no existe en modelo
        location: a.ubicacion ?? "",
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
  const onDelete = async (activityId: string | number) => {
    if (!API) return;
    try {
      const idStr = String(activityId);
      const res = await authFetch(`${API}/viajes/itinerario/${idStr}`, { method: "DELETE" });
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || `Error al eliminar (HTTP ${res.status})`);
      }
      await fetchActivities(); // 👈 mismo patrón que en gastos
    } catch (err: any) {
      console.error("Error borrar actividad:", err);
      Alert.alert("Error", "No se pudo eliminar la actividad.");
    }
  };

  const onSaveChanges = async () => {
    if (!API || !viajeId || !selectedActivity) {
      Alert.alert("Error", "No se pudo guardar la actividad.");
      return;
    }

    setSaving(true);
    try {
      const payload = {
        titulo: selectedActivity.title?.trim(),
        descripcion: selectedActivity.description?.trim() || null,
        ubicacion: selectedActivity.location?.trim() || null,
        fechaHora: normalizeDate(selectedActivity.dateTime),
      };
  
      if (selectedActivity.id === "new") {
        const res = await authFetch(`${API}/viajes/${viajeId}/itinerario`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      
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
            location: created.ubicacion ?? payload.ubicacion ?? "",
          };
          setActivities((prev) => [createdRow, ...prev]);
        }
      
        closeModal();
        Alert.alert("Listo", "Actividad creada");
      } else {
        const res = await authFetch(`${API}/viajes/itinerario/${selectedActivity.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });      
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
                    location: updated.ubicacion ?? payload.ubicacion ?? x.location,
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
        const res = await authFetch(`${API}/viajes/detalle/${viajeId}`);
        const v = await res.json();
        setGrupo({
          id: v.id ?? Number(viajeId),
          nombre: v.nombre ?? (nombre ?? `#${viajeId}`)
        });
      } catch (e) {
        console.error(e);
        setGrupo(null);
      }
    })();
  }, [API, viajeId]);
  

  
  
  
  

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
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={C.accent} />}
      >

        <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={22} color={C.text} />
        </Pressable>

        <View style={styles.portadaWrap}>
          <Image
            
            source={{uri:imagenUrl}}
            style={styles.portada}
          />
          <View style={styles.avatarOverlay}>
            <View style={styles.avatarCircle}>
              <Ionicons name="map-outline" size={30} color={C.accent} />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Itinerario del Viaje</Text>

        <Pressable style={[styles.card, { marginTop: 16 }]} disabled>
            <Text style={styles.cardTitle}>Viaje {nombreGrupo}</Text>
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
            onPress={() => openActivity(item)}
            activeOpacity={0.7}
          >
            <Text style={styles.taskTitle}>{item.title}</Text>
          </TouchableOpacity>

          {/* Tachito: botón independiente */}
          <TouchableOpacity
            onPress={() => onDelete(item.id)}
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
          onPress={() => openActivity(item)}
          activeOpacity={0.7}
        >
          <View style={styles.row}>
            <Ionicons name="calendar-outline" size={16} color={C.muted} />
            <Text style={styles.rowText}>{dateFormat(item.dateTime)}</Text>
          </View>
  
          {item.location ? (
            <TouchableOpacity
              style={styles.row}
              onPress={() => openInMaps(item.location!)}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
              activeOpacity={0.6}
              accessibilityRole="link"
              accessibilityLabel={`Abrir ${item.location} en Google Maps`}
            >
              <Ionicons name="location-outline" size={16} color={C.accent} />
              <Text style={[styles.rowText, styles.mapsLink]}>{item.location}</Text>
            </TouchableOpacity>
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
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0} // ajustá si hace falta
  >
    <View style={styles.modalBackdrop}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={StyleSheet.absoluteFill} />
      </TouchableWithoutFeedback>
      <View style={styles.modalCard}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              {selectedActivity?.id === "new"
                ? "Nueva Actividad"
                : "Detalle de la Actividad"}
            </Text>
            <Pressable onPress={saving ? undefined : closeModal}>
              <Ionicons name="close" size={22} color={C.text} />
            </Pressable>
          </View>

          {selectedActivity && (
            <ScrollView
              contentContainerStyle={{ gap: 12, paddingBottom: 12 }}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              <LabeledInput
                label="Título"
                value={selectedActivity.title}
                onChangeText={(t) =>
                  setSelectedActivity({ ...selectedActivity, title: t })
                }
              />
              <LabeledInput
                label="Descripción"
                value={selectedActivity.description || ""}
                onChangeText={(t) =>
                  setSelectedActivity({
                    ...selectedActivity,
                    description: t,
                  })
                }
              />
              <LabeledInput
                label="Lugar"
                value={selectedActivity.location || ""}
                onChangeText={(t) =>
                  setSelectedActivity({
                    ...selectedActivity,
                    location: t,
                  })
                }
              />
              <View style={{ gap: 6 }}>
                <Text style={styles.label}>Fecha y Hora</Text>
                <DateField
                  value={isoToDdmmyyyy(selectedActivity.dateTime)}
                  placeholder="Seleccionar fecha"
                  onChange={(formatted) => {
                    const isoDate = ddmmyyyyToIso(formatted, selectedActivity.dateTime);
                    setSelectedActivity({ ...selectedActivity, dateTime: isoDate });
                  }}
                  iconColor={C.accent}
                />
              </View>
              <LabeledInput
                label="Categoría"
                value={selectedActivity.category || ""}
                onChangeText={(t) =>
                  setSelectedActivity({
                    ...selectedActivity,
                    category: t,
                  })
                }
              />

              <Pressable
                style={[styles.primaryBtn, saving && { opacity: 0.7 }]}
                onPress={onSaveChanges}
                disabled={saving}
              >
                <Text style={styles.primaryBtnText}>
                  {saving ? "Guardando..." : "Guardar Cambios"}
                </Text>
              </Pressable>
            </ScrollView>
          )}
        </View>
      </View>
  </KeyboardAvoidingView>
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
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
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
  mapsLink: { color: C.accent, textDecorationLine: "underline" },
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
  primaryBtn: {
    backgroundColor: C.accent,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryBtnText: { color: C.bg, fontWeight: "800", fontSize: 15 },
});
