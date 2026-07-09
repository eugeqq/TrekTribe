import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import React, { useCallback, useRef, useState } from "react";
import {
  ActivityIndicator,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const C = {
  bg: "#0F1310",
  card: "#1a1f1b",
  border: "#2a322b",
  text: "#e8eee9",
  muted: "#9aa49d",
  accent: "#9ec39f",
};

// Cada cuánto se refresca sola la lista de chats mientras la pestaña está
// abierta, para que el circulito de "no leído" aparezca sin tener que
// entrar y salir de la pantalla.
const POLL_INTERVAL_MS = 4000;

type ChatPreview = {
  id: string;
  otroUsuario: { id: string; nombre: string; avatarUri?: string | null };
  ultimoMensaje: { contenido: string; enviadoEn: string; usuarioId: string } | null;
  noLeido?: boolean;
};

export default function ChatsScreen() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [chats, setChats] = useState<ChatPreview[]>([]);
  const [loading, setLoading] = useState(true);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviting, setInviting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const API_URL = process.env.EXPO_PUBLIC_API_URL;
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const fetchChats = useCallback(
    async (silencioso = false) => {
      try {
        const uid = await AsyncStorage.getItem("userId");
        setUserId(uid);
        if (!uid) {
          setChats([]);
          return;
        }
        const res = await fetch(`${API_URL}/chats/usuario/${uid}`);
        const data = await res.json();
        setChats(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Error al cargar chats:", error);
        if (!silencioso) setChats([]);
      } finally {
        if (!silencioso) setLoading(false);
      }
    },
    [API_URL]
  );

  // Recarga la lista al entrar a la pestaña, y después sigue refrescando
  // sola cada pocos segundos mientras la tenés abierta (para que el
  // circulito de "no leído" aparezca sin tener que salir y volver a entrar).
  // Se corta el intervalo apenas se sale de la pestaña.
  useFocusEffect(
    useCallback(() => {
      fetchChats(false);

      pollRef.current = setInterval(() => {
        fetchChats(true); // silencioso: no muestra el loader grande ni limpia la lista si falla
      }, POLL_INTERVAL_MS);

      return () => {
        if (pollRef.current) clearInterval(pollRef.current);
        pollRef.current = null;
      };
    }, [fetchChats])
  );

  const openChat = (chat: ChatPreview) => {
    router.push({
      pathname: "/(stack)/chatConversation",
      params: { chatId: chat.id, otroNombre: chat.otroUsuario.nombre, otroUsuarioId: chat.otroUsuario.id },
    });
  };

  const closeInviteModal = () => {
    setIsInviteOpen(false);
    setInviteEmail("");
    setErrorMessage("");
  };

  const onInvite = async () => {
    setErrorMessage("");
    const email = inviteEmail.trim();
    if (!email) {
      setErrorMessage("Ingresá un email.");
      return;
    }
    if (!userId) {
      setErrorMessage("No se encontró tu usuario. Volvé a iniciar sesión.");
      return;
    }

    setInviting(true);
    try {
      const res = await fetch(`${API_URL}/chats/invitar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ currentUserId: Number(userId), email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error || "No se pudo iniciar el chat.");
        return;
      }

      closeInviteModal();
      await fetchChats();
      router.push({
        pathname: "/(stack)/chatConversation",
        params: { chatId: data.id, otroNombre: data.otroUsuario.nombre, otroUsuarioId: data.otroUsuario.id },
      });
    } catch (error) {
      console.error("Error al invitar a chat:", error);
      setErrorMessage("No se pudo conectar con el servidor.");
    } finally {
      setInviting(false);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator color={C.accent} />
          <Text style={{ color: C.muted, marginTop: 8 }}>Cargando chats...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.rowTop}>
          <Text style={styles.headerTitle}>Chats</Text>
          <Pressable style={styles.btnPrimaryRow} onPress={() => setIsInviteOpen(true)}>
            <Ionicons name="add" size={16} color="white" />
            <Text style={styles.btnPrimaryText}>Nuevo chat</Text>
          </Pressable>
        </View>

        {chats.map((chat) => (
          <Pressable key={chat.id} style={styles.chatCard} onPress={() => openChat(chat)}>
            <View style={styles.iconCircleWrap}>
              <View style={styles.iconCircle}>
                <Ionicons name="person-outline" size={24} color={C.accent} />
              </View>
              {chat.noLeido && <View style={styles.unreadDot} />}
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.chatNombre, chat.noLeido && styles.chatNombreNoLeido]}>
                {chat.otroUsuario.nombre}
              </Text>
              <Text
                style={[styles.chatPreview, chat.noLeido && styles.chatPreviewNoLeido]}
                numberOfLines={1}
              >
                {chat.ultimoMensaje ? chat.ultimoMensaje.contenido : "Todavía no hay mensajes"}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={18} color={C.muted} />
          </Pressable>
        ))}

        {chats.length === 0 && (
          <Text style={styles.noResults}>
            No tenés chats todavía. Tocá "Nuevo chat" e invitá a alguien por su email.
          </Text>
        )}
      </ScrollView>

      <Modal visible={isInviteOpen} animationType="slide" transparent onRequestClose={closeInviteModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Nuevo chat</Text>
            <Text style={styles.modalSubtitle}>
              Ingresá el email de la persona con la que querés chatear. Tiene que tener una cuenta creada en
              TrekTribe.
            </Text>

            {errorMessage ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{errorMessage}</Text>
              </View>
            ) : null}

            <TextInput
              value={inviteEmail}
              onChangeText={setInviteEmail}
              placeholder="email@ejemplo.com"
              placeholderTextColor={C.muted}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              editable={!inviting}
            />

            <View style={styles.modalActions}>
              <Pressable style={[styles.btn, styles.btnGhost]} onPress={closeInviteModal} disabled={inviting}>
                <Text style={styles.btnGhostText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.btn, styles.btnPrimary, inviting && { opacity: 0.7 }]}
                onPress={onInvite}
                disabled={inviting}
              >
                <Text style={styles.btnPrimaryText}>{inviting ? "Invitando..." : "Invitar"}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  container: { padding: 16, gap: 12 },
  rowTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
  headerTitle: { color: C.text, fontSize: 24, fontWeight: "700" },
  btnPrimaryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    backgroundColor: "#4B5320",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 14 },
  chatCard: {
    width: "100%",
    backgroundColor: C.card,
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconCircleWrap: { position: "relative" },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: C.border,
    justifyContent: "center",
    alignItems: "center",
  },
  unreadDot: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#3B82F6",
    borderWidth: 2,
    borderColor: C.card,
  },
  chatNombre: { color: C.text, fontSize: 16, fontWeight: "700" },
  chatNombreNoLeido: { color: "#3B82F6" },
  chatPreview: { color: C.muted, fontSize: 14, marginTop: 2 },
  chatPreviewNoLeido: { color: C.text, fontWeight: "600" },
  noResults: { color: C.muted, fontSize: 14, textAlign: "center", marginTop: 24 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.5)", justifyContent: "center", padding: 20 },
  modalCard: { backgroundColor: C.bg, borderRadius: 20, padding: 16, borderWidth: 1, borderColor: C.border },
  modalTitle: { color: C.text, fontSize: 18, fontWeight: "700", marginBottom: 6 },
  modalSubtitle: { color: C.muted, fontSize: 13, marginBottom: 12 },
  input: {
    backgroundColor: C.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: C.border,
    color: C.text,
    fontSize: 16,
  },
  modalActions: { flexDirection: "row", gap: 12, justifyContent: "flex-end", marginTop: 16 },
  btn: { borderRadius: 12, paddingVertical: 10, paddingHorizontal: 16 },
  btnGhost: { borderWidth: 1, borderColor: C.border },
  btnGhostText: { color: C.text, fontWeight: "700" },
  btnPrimary: { backgroundColor: "#4B5320" },
  errorBox: {
    backgroundColor: "#401818",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#aa2b2b",
  },
  errorText: { color: "#ff9e9e", textAlign: "center", fontWeight: "600" },
});
