import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    Modal,
    Platform,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";


type Activity = {
  id: string;
  title: string;
  description?: string;
  dateTime: string;
  category?: string;
  location?: string;
};

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: "a1",
    title: "Llegada al hotel y check-in",
    description: "Llegada a Roma y alojamiento en el Hotel Mediterraneo.",
    dateTime: "2025-12-01T15:00",
    category: "Traslado",
    location: "Hotel Mediterraneo",
  },
  {
    id: "a2",
    title: "Cena grupal de bienvenida",
    description: "Cena en Trattoria da Enzo, reserva confirmada para las 20:30.",
    dateTime: "2025-12-01T20:30",
    category: "Comida",
    location: "Trastevere",
  },
  {
    id: "a3",
    title: "Tour guiado por el Coliseo",
    description: "Visita guiada con entradas prioritarias, guía en español.",
    dateTime: "2025-12-02T10:00",
    category: "Actividad",
    location: "Coliseo Romano",
  },
];


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


export default function ItineraryScreen() {
  const router = useRouter();
  const [activities, setActivities] = useState<Activity[]>(MOCK_ACTIVITIES);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openActivity = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedActivity(null);
    setIsModalOpen(false);
  };

  const onSaveChanges = () => {
    if (!selectedActivity) return;
    console.log("Guardando cambios de actividad:", selectedActivity.id);
    closeModal();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
        <Ionicons name="chevron-back" size={22} color="#e8eee9" />
      </Pressable>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
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

        <Pressable style={[styles.card, { marginTop: 16 }]}>
          <Text style={styles.cardTitle}>Roma, Italia</Text>
          <Text style={styles.muted}>1 al 8 de Diciembre 2025</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>Actividades programadas</Text>

        <FlatList
          data={activities}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <Pressable onPress={() => openActivity(item)}>
              <View style={styles.taskCard}>
                <View style={styles.taskContent}>
                  <Text style={styles.taskTitle}>{item.title}</Text>
                  <View style={styles.row}>
                    <Ionicons name="calendar-outline" size={16} color={C.muted} />
                    <Text style={styles.rowText}>
                      {new Date(item.dateTime).toLocaleString("es-AR", {
                        day: "numeric",
                        month: "short",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </Text>
                  </View>
                  {item.location && (
                    <View style={styles.row}>
                      <Ionicons name="location-outline" size={16} color={C.muted} />
                      <Text style={styles.rowText}>{item.location}</Text>
                    </View>
                  )}
                  {item.category && (
                    <View style={styles.chips}>
                      <Chip label={item.category} color={C.accent} />
                    </View>
                  )}
                </View>
              </View>
            </Pressable>
          )}
          ListEmptyComponent={
            <Text
              style={[
                styles.muted,
                { textAlign: "center", marginVertical: 20 },
              ]}
            >
              No hay actividades registradas.
            </Text>
          }
        />
      </ScrollView>

      
      <Modal
        visible={isModalOpen}
        animationType="slide"
        transparent
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Detalle de la Actividad</Text>
              <Pressable onPress={closeModal}>
                <Ionicons name="close" size={22} color="#e8eee9" />
              </Pressable>
            </View>

            {selectedActivity && (
              <ScrollView contentContainerStyle={{ gap: 12 }}>
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
                    setSelectedActivity({ ...selectedActivity, description: t })
                  }
                />
                <LabeledInput
                  label="Lugar"
                  value={selectedActivity.location || ""}
                  onChangeText={(t) =>
                    setSelectedActivity({ ...selectedActivity, location: t })
                  }
                />
                <LabeledInput
                  label="Fecha y Hora"
                  value={selectedActivity.dateTime}
                  onChangeText={(t) =>
                    setSelectedActivity({ ...selectedActivity, dateTime: t })
                  }
                />
                <LabeledInput
                  label="Categoría"
                  value={selectedActivity.category || ""}
                  onChangeText={(t) =>
                    setSelectedActivity({ ...selectedActivity, category: t })
                  }
                />

                <Pressable style={styles.primaryBtn} onPress={onSaveChanges}>
                  <Text style={styles.primaryBtnText}>Guardar Cambios</Text>
                </Pressable>
              </ScrollView>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// --- Estilos (idénticos a TasksScreen) ---
const C = {
  bg: "#0F1310",
  card: "#1a1f1b",
  border: "#2a322b",
  text: "#e8eee9",
  muted: "#9aa49d",
  accent: "#9ec39f",
  delete: "#f06292",
};

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
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: 16,
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
