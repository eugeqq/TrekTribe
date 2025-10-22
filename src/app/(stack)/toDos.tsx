import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useMemo, useState } from "react";
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


type Participant = { id: string; name: string; avatar?: string };

type Task = {
  id: string;
  title: string;
  assignedToId: string; 
  isCompleted: boolean;
  dueDate: string; 
  category?: string;
};


const MOCK_PARTICIPANTS: Participant[] = [
  { id: "u1", name: "Ana" },
  { id: "u2", name: "Bruno" },
  { id: "u3", name: "Carla" },
  { id: "u4", name: "Diego" },
];

const MOCK_TASKS: Task[] = [
  {
    id: "t1",
    title: "Comprar pasajes de tren a Venecia",
    assignedToId: "u1",
    isCompleted: false,
    dueDate: "2025-11-20",
    category: "Reserva",
  },
  {
    id: "t2",
    title: "Buscar un buen restaurante para la cena",
    assignedToId: "u3",
    isCompleted: true,
    dueDate: "2025-10-25",
    category: "Comida",
  },
  {
    id: "t3",
    title: "Investigar tours en el Coliseo",
    assignedToId: "u2",
    isCompleted: false,
    dueDate: "2025-11-05",
    category: "Actividad",
  },
  {
    id: "t4",
    title: "Organizar transporte al aeropuerto",
    assignedToId: "u4",
    isCompleted: false,
    dueDate: "2025-12-01",
    category: "Transporte",
  },
];


function Chip({ label, color }: { label: string; color?: string }) {
  return (
    <View style={[styles.chip, color ? { backgroundColor: color + '30', borderColor: color } : {}]}>
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
    <SafeAreaView>
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
    </SafeAreaView>
  );
}


export default function TasksScreen() {
  const router = useRouter();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [draftTitle, setDraftTitle] = useState("");
  const [draftDueDate, setDraftDueDate] = useState("2025-12-31"); 
  const [draftAssignedTo, setDraftAssignedTo] = useState(MOCK_PARTICIPANTS[0].id);
  const [draftCategory, setDraftCategory] = useState("General");
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  
  const [editTitle, setEditTitle] = useState("");
  const [editDueDate, setEditDueDate] = useState("");
  const [editAssignedTo, setEditAssignedTo] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editIsCompleted, setEditIsCompleted] = useState(false);

  const tasks = MOCK_TASKS;
  const participantsById = useMemo(
    () => Object.fromEntries(MOCK_PARTICIPANTS.map((p) => [p.id, p] as const)),
    []
  );

  const toggleTaskCompletion = (taskId: string) => {
    console.log(`Toggling completion for task ${taskId}`);
  };

  const onEditTask = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        setEditingTask(task);
        setEditTitle(task.title);
        setEditDueDate(task.dueDate);
        setEditAssignedTo(task.assignedToId);
        setEditCategory(task.category || "General");
        setEditIsCompleted(task.isCompleted);
        
        setIsEditModalOpen(true);
    }
  };
  
  const onCloseEditModal = () => {
      setIsEditModalOpen(false);
      setEditingTask(null);
  };
  
  const onSaveChanges = () => {
      if (!editingTask) return;
      console.log("Guardando cambios para tarea:", editingTask.id);
      console.log("Nuevos valores:", {
          title: editTitle,
          dueDate: editDueDate,
          assignedTo: editAssignedTo,
          category: editCategory,
          isCompleted: editIsCompleted,
      });
      onCloseEditModal();
  };
  
  const onDeleteTask = () => {
      if (!editingTask) return;
      console.log("Eliminando tarea:", editingTask.id);
      onCloseEditModal();
  };
  
  const onToggleCompletionInEdit = () => {
      setEditIsCompleted(prev => !prev);
      console.log("Cambiando estado de completada en el modal de edición.");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
        <Ionicons name="chevron-back" size={22} color="#e8eee9" />
      </Pressable>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.portadaWrap}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }}
            style={styles.portada}
          />
          <View style={styles.avatarOverlay}>
            <View style={styles.avatarCircle}>
              <Ionicons name="clipboard-outline" size={30} color="#9ec39f" />
            </View>
          </View>
        </View>

        <Text style={styles.title}>Tareas del grupo</Text>

        <Pressable style={[styles.card, { marginTop: 16 }]} onPress={() => console.log('Ir a detalles del viaje')}>
          <View style={styles.bannerHeader}>
            <Text style={styles.cardTitle}> Informacion general del Viaje</Text>
            <Ionicons name="chevron-forward" size={18} color={C.muted} />
          </View>
          <View style={{ height: 8 }} />
          <Text style={styles.muted}>Roma, Italia</Text>
          <Text style={styles.muted}>1 Diciembre 2025 - 8 Diciembre 2025</Text>
          <Text style={styles.muted}>4 participantes</Text>
        </Pressable>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Estado</Text>
          <View style={{ height: 8 }} />
          <Text style={styles.muted}>
            Tareas totales: {tasks.length}
          </Text>
          <Text style={styles.muted}>
            Pendientes: {tasks.filter(t => !t.isCompleted).length}
          </Text>
          <Text style={styles.muted}>
            Completadas: {tasks.filter(t => t.isCompleted).length}
          </Text>
        </View>
        
        <View style={styles.topActionButtonContainer}>
            <Pressable style={styles.primaryBtn} onPress={() => setIsCreateModalOpen(true)}>
                <Text style={styles.primaryBtnText}>
                    <Ionicons name="add" size={16} color="#0F1310" /> Nueva Tarea
                </Text>
            </Pressable>
        </View>

        <Text style={styles.sectionTitle}>Pendientes</Text>
        <FlatList
          data={tasks.filter(t => !t.isCompleted)}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => {
            const assignee = participantsById[item.assignedToId]?.name ?? "Sin asignar";
            return (
              <TaskCard
                task={item}
                assigneeName={assignee}
                onToggle={toggleTaskCompletion}
                onEdit={onEditTask} 
                isCompleted={false}
              />
            );
          }}
          ListFooterComponent={<View style={{ height: 8 }} />}
          ListEmptyComponent={<Text style={[styles.muted, { textAlign: 'center', margin: 20 }]}>¡No hay tareas pendientes! 🎉</Text>}
        />
        
        <Text style={styles.sectionTitle}>Completadas</Text>
        <FlatList
          data={tasks.filter(t => t.isCompleted)}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          renderItem={({ item }) => {
            const assignee = participantsById[item.assignedToId]?.name ?? "Sin asignar";
            return (
              <TaskCard
                task={item}
                assigneeName={assignee}
                onToggle={toggleTaskCompletion}
                onEdit={onEditTask} 
                isCompleted={true}
              />
            );
          }}
          ListFooterComponent={<View style={{ height: 8 }} />}
          ListEmptyComponent={null}
        />
      </ScrollView>

      <Modal
        visible={isCreateModalOpen}
        animationType="slide"
        transparent
        onRequestClose={() => setIsCreateModalOpen(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Crear Tarea</Text>
              <Pressable onPress={() => setIsCreateModalOpen(false)}>
                <Ionicons name="close" size={22} color="#e8eee9" />
              </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 12 }}>
              <LabeledInput
                label="Título de la Tarea"
                placeholder="Ej: Reservar hotel en Roma"
                value={draftTitle}
                onChangeText={setDraftTitle}
              />

              <LabeledInput
                label="Fecha Límite (AAAA-MM-DD)"
                placeholder="2025-12-31"
                value={draftDueDate}
                onChangeText={setDraftDueDate}
              />

              <Text style={styles.label}>Categoría</Text>
              <View style={styles.pillRow}>
                {["Reserva", "Comida", "Actividad", "Transporte", "General"].map((cat) => (
                  <Pressable
                    key={cat}
                    onPress={() => setDraftCategory(cat)}
                    style={[styles.pill, draftCategory === cat && styles.pillActive]}
                  >
                    <Text
                      style={[styles.pillText, draftCategory === cat && styles.pillTextActive]}
                    >
                      {cat}
                    </Text>
                  </Pressable>
                ))}
              </View>

              <Text style={styles.label}>Asignar a:</Text>
              <View style={styles.pillRow}>
                {MOCK_PARTICIPANTS.map((p) => (
                  <Pressable
                    key={p.id}
                    onPress={() => setDraftAssignedTo(p.id)}
                    style={[styles.pill, draftAssignedTo === p.id && styles.pillActive]}
                  >
                    <Text
                      style={[styles.pillText, draftAssignedTo === p.id && styles.pillTextActive]}
                    >
                      {p.name}
                    </Text>
                  </Pressable>
                ))}
              </View>

              <View style={{ height: 12 }} />
              <Pressable style={[styles.primaryBtn, { opacity: 0.6 }]} disabled>
                <Text style={styles.primaryBtnText}>Guardar Tarea (próximamente)</Text>
              </Pressable>
            </ScrollView>
          </View>
        </View>
      </Modal>
      
      <Modal
        visible={isEditModalOpen}
        animationType="slide"
        transparent
        onRequestClose={onCloseEditModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalCard}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Editar Tarea</Text>
              <Pressable onPress={onCloseEditModal}>
                <Ionicons name="close" size={22} color="#e8eee9" />
              </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 12 }}>
              
              <Pressable style={styles.checkRow} onPress={onToggleCompletionInEdit}>
                <Ionicons
                    name={editIsCompleted ? "checkbox" : "square-outline"}
                    size={20}
                    color={editIsCompleted ? C.accent : C.muted}
                />
                <Text style={styles.checkText}>
                    {editIsCompleted ? "Marcar como Pendiente" : "Marcar como Completada"}
                </Text>
              </Pressable>
              
              <LabeledInput
                label="Título"
                value={editTitle}
                onChangeText={setEditTitle}
              />
              <LabeledInput
                label="Fecha Límite (AAAA-MM-DD)"
                value={editDueDate}
                onChangeText={setEditDueDate}
              />

              <Text style={styles.label}>Categoría</Text>
              <View style={styles.pillRow}>
                {["Reserva", "Comida", "Actividad", "Transporte", "General"].map((cat) => (
                  <Pressable
                    key={cat}
                    onPress={() => setEditCategory(cat)}
                    style={[styles.pill, editCategory === cat && styles.pillActive]}
                  >
                    <Text
                      style={[styles.pillText, editCategory === cat && styles.pillTextActive]}
                    >
                      {cat}
                    </Text>
                  </Pressable>
                ))}
              </View>

              <Text style={styles.label}>Asignar a:</Text>
              <View style={styles.pillRow}>
                {MOCK_PARTICIPANTS.map((p) => (
                  <Pressable
                    key={p.id}
                    onPress={() => setEditAssignedTo(p.id)}
                    style={[styles.pill, editAssignedTo === p.id && styles.pillActive]}
                  >
                    <Text
                      style={[styles.pillText, editAssignedTo === p.id && styles.pillTextActive]}
                    >
                      {p.name}
                    </Text>
                  </Pressable>
                ))}
              </View>

              <View style={{ height: 12 }} />
              
              <Pressable style={styles.primaryBtn} onPress={onSaveChanges}>
                <Text style={styles.primaryBtnText}>Guardar Cambios</Text>
              </Pressable>
              
              <Pressable style={[styles.primaryBtn, styles.deleteBtn]} onPress={onDeleteTask}>
                <Text style={styles.deleteBtnText}><Ionicons name="trash-outline" size={16} color="#f06292" /> Eliminar Tarea</Text>
              </Pressable>

            </ScrollView>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}



function TaskCard({ task, assigneeName, onToggle, onEdit, isCompleted }: { task: Task, assigneeName: string, onToggle: (id: string) => void, onEdit: (id: string) => void, isCompleted: boolean }) {
    const cardStyle = isCompleted ? styles.taskCardCompleted : styles.taskCard;
    const titleStyle = isCompleted ? styles.taskTitleCompleted : styles.taskTitle;
    const iconName = isCompleted ? "checkmark-circle-sharp" : "ellipse-outline";
    const iconColor = isCompleted ? C.accent : C.muted;
    const today = new Date().toISOString().split('T')[0];
    const isOverdue = !isCompleted && task.dueDate < today;

    return (
        <View style={[cardStyle, isOverdue && styles.taskCardOverdue]}>
            <Pressable style={styles.taskToggleArea} onPress={() => onToggle(task.id)}>
                <Ionicons name={iconName} size={20} color={iconColor} />
            </Pressable>
            <View style={styles.taskContent}> 
                <View style={styles.taskHeader}>
                    <Text style={titleStyle}>{task.title}</Text>
                    <Pressable onPress={() => onEdit(task.id)} style={styles.editButton}>
                        <Ionicons name="pencil-outline" size={16} color={C.muted} />
                    </Pressable>
                </View>

                <View style={styles.row}>
                    <Ionicons name="person-circle-outline" size={16} color={C.muted} />
                    <Text style={styles.rowText}>Asignada a: {assigneeName}</Text>
                </View>

                <View style={styles.row}>
                    <Ionicons name="calendar-outline" size={16} color={isOverdue ? '#f06292' : C.muted} />
                    <Text style={[styles.rowText, isOverdue && {color: '#f06292', fontWeight: 'bold'}]}>
                        Límite: {task.dueDate} {isOverdue && '(¡Vencida!)'}
                    </Text>
                </View>

                {task.category ? (
                    <View style={styles.chips}>
                        <Chip label={task.category} color={C.accent} />
                    </View>
                ) : null}
            </View>
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

  bannerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },

  topActionButtonContainer: {
      width: "90%",
      alignSelf: "center",
      marginTop: 16,
      marginBottom: 8,
  },
  
  sectionTitle: {
    color: C.text,
    fontWeight: "700",
    fontSize: 16,
    marginTop: 18,
    marginBottom: 8,
    paddingHorizontal: 16,
  },

  taskCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: C.border,
  },
  taskCardCompleted: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: C.card,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: C.border,
    opacity: 0.6,
  },
  taskCardOverdue: {
      borderColor: C.delete, 
      backgroundColor: '#201a1c',
  },
  taskToggleArea: {
    padding: 4,
    marginRight: 4,
    paddingTop: 2,
  },
  taskContent: { 
      flex: 1,
      paddingLeft: 8,
  },
  taskHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", 
    marginBottom: 6,
  },
  taskTitle: { fontSize: 16, fontWeight: "700", color: C.text, flexShrink: 1, marginRight: 8 },
  taskTitleCompleted: { fontSize: 16, fontWeight: "500", color: C.muted, textDecorationLine: 'line-through', flexShrink: 1, marginRight: 8 },
  editButton: {
      padding: 4, 
  },

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

  pillRow: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "#2a322b",
    borderWidth: 1,
    borderColor: C.border,
  },
  pillActive: { backgroundColor: "#233027", borderColor: C.accent },
  pillText: { fontSize: 13, color: C.text },
  pillTextActive: { color: C.accent, fontWeight: "700" },

  checkRow: { flexDirection: "row", alignItems: "center", gap: 8, paddingVertical: 4 },
  checkText: { fontSize: 14, color: C.text },
  
  primaryBtn: {
    backgroundColor: C.accent,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  primaryBtnText: { color: "#0F1310", fontWeight: "800", fontSize: 15 },
  
  deleteBtn: {
      backgroundColor: 'transparent',
      marginTop: 8,
      borderWidth: 1,
      borderColor: C.delete,
  },
  deleteBtnText: {
      color: C.delete,
      fontWeight: "800",
      fontSize: 15,
  },
});