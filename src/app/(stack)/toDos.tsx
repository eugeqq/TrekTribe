import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
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

const C = {
  bg: "#0F1310",
  card: "#1a1f1b",
  border: "#2a322b",
  text: "#e8eee9",
  muted: "#9aa49d",
  accent: "#9ec39f",
  delete: "#f06292",
};

type Tarea = {
  id: string;
  titulo: string;
  descripcion?: string;
  estado: "pendiente" | "completada";
  responsableId?: number | null;
  responsable?: { nombre: string; apellido: string } | null;
};

type Participante = {
  id: string;
  name: string;
  avatar: string | null;
};

type Viaje = {
  id: string;
  nombre: string;
  descripcion?: string;
  ubicacion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  imagen?: string;
  miembrosCant?: number;
};

function LabeledInput(props: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  multiline?: boolean;
}) {
  return (
    <View style={{ gap: 6 }}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor="#6b746e"
        style={[
          styles.input,
          props.multiline && { height: 90, textAlignVertical: "top" },
        ]}
        multiline={props.multiline}
      />
    </View>
  );
}

async function safeJson(res: Response) {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return {};
  }
}

export default function ToDosScreen() {
  const { groupId } = useLocalSearchParams();
  const router = useRouter();
  // Asegúrate de que esta variable de entorno esté definida en tu proyecto Expo
  const API = process.env.EXPO_PUBLIC_API_URL; 

  const [viaje, setViaje] = useState<Viaje | null>(null);
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [participantes, setParticipantes] = useState<Participante[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [selected, setSelected] = useState<Tarea | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);


  const fetchViaje = useCallback(async () => {
    if (!API || !groupId) return;
    try {
      const res = await fetch(`${API}/viajes/detalle/${groupId}`);
      const data = await safeJson(res);
      setViaje(data);
    } catch (e) {
      console.error("Error al cargar viaje:", e);
    }
  }, [API, groupId]);

  const fetchTareas = useCallback(async () => {
    if (!API || !groupId) return;
    try {
      const res = await fetch(`${API}/viajes/${groupId}/tareas`);
      const data = await safeJson(res);
      const rows: Tarea[] = Array.isArray(data)
        ? data.map((t: any) => ({
            id: String(t.id),
            titulo: t.titulo,
            descripcion: t.descripcion ?? "",
            estado: t.estado ?? "pendiente",
            responsableId: t.responsableId,
            responsable: t.responsable,
          }))
        : [];
      rows.sort((a, b) => {
        if (a.estado === "pendiente" && b.estado === "completada") return -1;
        if (a.estado === "completada" && b.estado === "pendiente") return 1;
        return a.titulo.localeCompare(b.titulo);
      });
      setTareas(rows);
    } catch (e) {
      console.error("Error al cargar tareas:", e);
    } finally {
      setLoading(false);
    }
  }, [API, groupId]);

  const fetchParticipantes = useCallback(async () => {
    if (!API || !groupId) return;
    try {
      const res = await fetch(`${API}/viajes/${groupId}/participantes`);
      const data = await safeJson(res);
      setParticipantes(data);
    } catch (e) {
      console.error("Error al cargar participantes:", e);
    }
  }, [API, groupId]);

  useEffect(() => {
    if (!groupId) {
      setLoading(false);
      return;
    }
    fetchViaje();
    fetchTareas();
    fetchParticipantes();
  }, [fetchViaje, fetchTareas, fetchParticipantes, groupId]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await Promise.all([fetchViaje(), fetchTareas(), fetchParticipantes()]);
    setRefreshing(false);
  }, [fetchViaje, fetchTareas, fetchParticipantes]);

  // ------- MODAL CONTROL -------
  const openCreate = () => {
    setSelected({
      id: "new",
      titulo: "",
      descripcion: "",
      estado: "pendiente",
      responsableId: undefined,
    });
    setIsModalOpen(true);
  };

  const openEdit = (t: Tarea) => {
    setSelected(t);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelected(null);
    setIsModalOpen(false);
  };


  const onSave = async () => {
    console.log("API:", API);
    console.log("groupId:", groupId);
    console.log("selected:", selected);
    if (!API || !groupId || !selected) return;

    if (!selected.titulo.trim()) {
      Alert.alert("Título requerido", "Por favor, ingresa un título para la tarea.");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        titulo: selected.titulo.trim(),
        descripcion: selected.descripcion?.trim() ?? "",
        estado: selected.estado,
        responsableId: selected.responsableId ?? null,
      };

      const isNew = selected.id === "new";
      const url = isNew
        ? `${API}/viajes/${groupId}/tareas`
        : `${API}/tareas/${selected.id}`;
      const method = isNew ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Error al guardar tarea:", text);
        Alert.alert("Error", "No se pudo guardar la tarea.");
        return;
      }

      await fetchTareas();
      closeModal();
      
      Alert.alert(
        isNew ? "¡Tarea creada!" : "¡Tarea actualizada!",
        isNew ? "La nueva tarea ha sido agregada con éxito." : "Los cambios han sido guardados."
      );
      
    } catch (e) {
      console.error("Error al guardar:", e);
      Alert.alert("Error", "Ocurrió un problema al guardar la tarea.");
    } finally {
      setSaving(false);
    }
  };

  // 🗑️ Función asíncrona para manejar la lógica de eliminación y logging
  // const handleDelete = async (t: Tarea) => {
  //     const deleteUrl = `${API}/tareas/${t.id}`;
      
  //     // Log de depuración
  //     console.log("🔥 Confirmación de eliminación. Enviando DELETE a:", deleteUrl);
      
  //     try {
  //         const res = await fetch(deleteUrl, { method: "DELETE" });
          
  //         if (!res.ok) {
  //             const errorText = await res.text();
  //             console.error("❌ Error del servidor al eliminar tarea:", res.status, errorText);
  //             Alert.alert("Error", `No se pudo eliminar la tarea. Status: ${res.status}. ${errorText.substring(0, 50)}...`);
  //             return;
  //         }
          
  //         console.log("✅ Tarea eliminada exitosamente en el backend. Recargando lista.");
          
  //         await fetchTareas(); // Vuelve a cargar la lista
          
  //         Alert.alert("Eliminada", `La tarea "${t.titulo}" ha sido eliminada.`)
          
  //     } catch (e) {
  //         console.error("❌ Error en el proceso de eliminación:", e);
  //         Alert.alert("Error", "Ocurrió un problema de red o conexión al eliminar la tarea.");
  //     }
  // }


  // 🗑️ Función onDelete (handler de Pressable) que dispara la alerta
  const onDelete = async (activityId: string | number) => {
    if (!API) return;
    try {
      console.log('recibido es',activityId)
      const idStr = String(activityId);
      const res = await fetch(`${API}/tareas/${idStr}`, { method: "DELETE" });
      console.log('paso consulta')
      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || `Error al eliminar (HTTP ${res.status})`);
      }
      await fetchTareas(); // 👈 mismo patrón que en gastos
    } catch (err: any) {
      console.error("Error borrar actividad:", err);
      Alert.alert("Error", "No se pudo eliminar la actividad.");
    }
  };


  if (loading && !viaje) {
    return (
      <SafeAreaView style={styles.safe}>
        <Pressable style={styles.backBtn} onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={22} color={C.text} />
        </Pressable>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator color={C.accent} size="large" />
          <Text style={[styles.muted, { marginTop: 10 }]}>Cargando grupo y tareas...</Text>
        </View>
      </SafeAreaView>
    );
  }


  return (
    <SafeAreaView style={styles.safe}>
        <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={22} color="#e8eee9" />
        </Pressable>
      

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={C.accent} />
        }
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {viaje && (
          <View style={styles.header}>
            {viaje.imagen ? (
              <Image source={{ uri: viaje.imagen }} style={styles.cover} />
            ) : (
              <View style={[styles.cover, { backgroundColor: C.border }]} />
            )}
            <Text style={styles.title}>{viaje.nombre}</Text>
            <Text style={styles.subtitle}>
              {viaje.ubicacion ?? "—"} · {viaje.miembrosCant ?? 0} miembros
            </Text>
            {viaje.fechaInicio && (
              <Text style={styles.dates}>
                {new Date(viaje.fechaInicio).toLocaleDateString()} –{" "}
                {viaje.fechaFin
                  ? new Date(viaje.fechaFin).toLocaleDateString()
                  : "sin fecha fin"}
              </Text>
            )}
          </View>
        )}

        <View style={{ paddingHorizontal: 16 }}>
          <Pressable style={styles.primaryBtn} onPress={openCreate}>
            <Text style={styles.primaryBtnText}>+ Nueva tarea</Text>
          </Pressable>
        </View>

        {loading ? (
          <Text style={[styles.muted, { textAlign: "center", marginTop: 20 }]}>Cargando…</Text>
        ) : tareas.length === 0 ? (
          <Text style={[styles.muted, { textAlign: "center", marginTop: 20 }]}>
            No hay tareas registradas.
          </Text>
        ) : (
          <FlatList
            data={tareas}
            scrollEnabled={false}
            keyExtractor={(i) => i.id}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.taskCard}
                onPress={() => openEdit(item)}
                activeOpacity={0.8}
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.taskTitle}>{item.titulo}</Text>
                  {item.descripcion ? (
                    <Text style={styles.taskDesc}>{item.descripcion}</Text>
                  ) : null}
                  <Text style={styles.taskMeta}>
                    {item.responsable
                      ? `${item.responsable.nombre} ${item.responsable.apellido}`
                      : "Sin asignar"}{" "}
                    •{" "}
                    {item.estado === "completada" ? "✅ Completada" : "🕓 Pendiente"}
                  </Text>
                </View>
                {/* <Pressable onPress={() => onDelete(item)}>
                  <Ionicons name="trash-outline" size={20} color={C.delete} />
                </Pressable> */}
              
              <TouchableOpacity
              
                onPress={() => {
                  console.log(item);
                  onDelete(item.id)}
                }   // 👈 antes: onDelete(item)
                hitSlop={{ top: 12, right: 12, bottom: 12, left: 12 }}
                activeOpacity={0.6}
                accessibilityRole="button"
                accessibilityLabel="Eliminar actividad"
              >
                <Ionicons name="trash-outline" size={20} color={C.delete} />
              </TouchableOpacity>

              </TouchableOpacity>

            )}
          />
        )}
      </ScrollView>

      <Modal
        visible={isModalOpen}
        animationType="slide"
        transparent
        onRequestClose={() => (saving ? undefined : closeModal())}
      >
        <View style={styles.modalBackdrop} pointerEvents="box-none">
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {selected?.id === "new" ? "Nueva tarea" : "Editar tarea"}
              </Text>
              <Pressable onPress={closeModal}>
                <Ionicons name="close" size={22} color={C.text} />
              </Pressable>
            </View>

            {selected && (
              // CAMBIO CRÍTICO: Reemplazamos ScrollView por View para evitar conflictos de toque
              <View style={{ gap: 14, paddingBottom: 10 }}> 
                <LabeledInput
                  label="Título"
                  value={selected.titulo}
                  onChangeText={(t) => setSelected({ ...selected, titulo: t })}
                />
                <LabeledInput
                  label="Descripción"
                  value={selected.descripcion || ""}
                  onChangeText={(t) => setSelected({ ...selected, descripcion: t })}
                  multiline
                />

                <View>
                  <Text style={styles.label}>Estado</Text>
                  <View style={{ flexDirection: "row", gap: 10 }}>
                    {["pendiente", "completada"].map((st) => (
                      <Pressable
                        key={st}
                        onPress={() => setSelected({ ...selected, estado: st as any })}
                        style={[
                          styles.stateBtn,
                          selected.estado === st && styles.stateBtnActive,
                        ]}
                      >
                        <Text
                          style={[
                            styles.stateBtnText,
                            selected.estado === st && styles.stateBtnTextActive,
                          ]}
                        >
                          {st === "pendiente" ? "Pendiente" : "Completada"}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </View>

                <View>
                  <Text style={styles.label}>Responsable</Text>
                  <View style={styles.dropdown}>
                    <Pressable
                      onPress={() => setSelected({ ...selected, responsableId: null })}
                      style={[
                        styles.option,
                        (selected.responsableId === null ||
                          selected.responsableId === undefined) && styles.optionActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          (selected.responsableId === null ||
                            selected.responsableId === undefined) &&
                            styles.optionTextActive,
                        ]}
                      >
                        Sin asignar
                      </Text>
                    </Pressable>

                    {participantes.map((p) => (
                      <Pressable
                        key={p.id}
                        onPress={() => setSelected({ ...selected, responsableId: Number(p.id) })}
                        style={[
                          styles.option,
                          selected.responsableId === Number(p.id) && styles.optionActive,
                        ]}
                      >
                        <Text
                          style={[
                            styles.optionText,
                            selected.responsableId === Number(p.id) && styles.optionTextActive,
                          ]}
                        >
                          {p.name}
                        </Text>
                      </Pressable>
                    ))}
                  </View>
                </View>

                <Pressable
                  style={[styles.primaryBtn, saving && { opacity: 0.7 }]}
                  onPress={() => {
                    // CONSOLE.LOG DE PRUEBA: Si ves esto, el botón funciona.
                    console.log("✅ Botón 'Guardar cambios' presionado. Llamando a onSave...");
                    onSave();
                  }}
                  disabled={saving}
                >
                  <Text style={styles.primaryBtnText}>
                    {saving ? "Guardando..." : "Guardar cambios"}
                  </Text>
                </Pressable>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  backBtn: {
    position: "absolute",
    top: 12,
    left: 12,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: C.card,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: C.border,
  },
  header: { alignItems: "center", paddingBottom: 20 },
  cover: {
    width: "100%",
    height: 160,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: { fontSize: 22, color: C.text, fontWeight: "700", marginTop: 8 },
  subtitle: { color: C.muted, marginTop: 4 },
  dates: { color: C.muted, marginTop: 4, fontSize: 13 },
  primaryBtn: {
    backgroundColor: C.accent,
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 12,
    marginVertical: 8,
  },
  primaryBtnText: { color: "#0F1310", fontWeight: "800", fontSize: 15 },
  muted: { color: C.muted, fontSize: 14 },
  taskCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  taskTitle: { fontSize: 16, fontWeight: "700", color: C.text },
  taskDesc: { color: C.muted, fontSize: 13, marginTop: 4 },
  taskMeta: { color: C.muted, fontSize: 12, marginTop: 6 },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    padding: 16,
  },
  modalCard: {
    maxHeight: "90%",
    backgroundColor: C.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: C.border,
    padding: 16,
  },
  modalHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  modalTitle: { fontSize: 18, color: C.text, fontWeight: "800" },
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
  dropdown: {
    backgroundColor: "#0f1511",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
    paddingVertical: 4,
  },
  option: { paddingVertical: 8, paddingHorizontal: 12 },
  optionActive: { backgroundColor: C.accent + "20" },
  optionText: { color: C.text },
  optionTextActive: { color: C.accent, fontWeight: "700" },
  stateBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: C.border,
  },
  stateBtnActive: { backgroundColor: C.accent + "20" },
  stateBtnText: { color: C.text },
  stateBtnTextActive: { color: C.accent, fontWeight: "700" },
});