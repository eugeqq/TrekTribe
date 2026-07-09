import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
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

// Cada cuánto se refresca sola la conversación mientras está abierta.
const POLL_INTERVAL_MS = 3000;

type Mensaje = {
  id: string;
  contenido: string;
  usuarioId: string;
  enviadoEn: string;
};

export default function ChatConversationScreen() {
  const router = useRouter();
  const { chatId, otroNombre } = useLocalSearchParams<{
    chatId?: string;
    otroNombre?: string;
    otroUsuarioId?: string;
  }>();

  const API = process.env.EXPO_PUBLIC_API_URL;

  const [userId, setUserId] = useState<string | null>(null);
  const [mensajes, setMensajes] = useState<Mensaje[]>([]);
  const [loading, setLoading] = useState(true);
  const [texto, setTexto] = useState("");
  const [sending, setSending] = useState(false);

  const listRef = useRef<FlatList<Mensaje>>(null);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    (async () => {
      const uid = await AsyncStorage.getItem("userId");
      setUserId(uid);
    })();
  }, []);

  const fetchMensajes = useCallback(
    async (silencioso = false) => {
      if (!API || !chatId) return;
      try {
        if (!silencioso) setLoading(true);
        const res = await fetch(`${API}/chats/${chatId}/mensajes`);
        const data = await res.json();
        setMensajes(Array.isArray(data) ? data : []);
      } catch (e) {
        console.error("Error al cargar mensajes:", e);
      } finally {
        if (!silencioso) setLoading(false);
      }
    },
    [API, chatId]
  );

  // Avisa al backend que este usuario ya vio los mensajes del chat, para
  // que el circulito de "no leído" desaparezca en la lista. Lee el userId
  // directo de AsyncStorage (en vez de depender del estado) para no
  // pisarnos con la carrera de efectos al entrar recién a la pantalla.
  const markAsRead = useCallback(async () => {
    if (!API || !chatId) return;
    try {
      const uid = await AsyncStorage.getItem("userId");
      if (!uid) return;
      await fetch(`${API}/chats/${chatId}/leido`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuarioId: Number(uid) }),
      });
    } catch (e) {
      console.error("Error al marcar chat como leído:", e);
    }
  }, [API, chatId]);

  // Carga inicial + polling automático mientras la pantalla está en foco.
  // Se corta el intervalo apenas se sale de la pantalla, para no seguir
  // pegándole al backend de fondo.
  useFocusEffect(
    useCallback(() => {
      fetchMensajes(false);
      markAsRead();

      pollRef.current = setInterval(() => {
        fetchMensajes(true); // silencioso: no muestra el loader grande
        markAsRead(); // si llegó un mensaje nuevo mientras estoy mirando, cuenta como leído
      }, POLL_INTERVAL_MS);

      return () => {
        if (pollRef.current) clearInterval(pollRef.current);
        pollRef.current = null;
      };
    }, [fetchMensajes, markAsRead])
  );

  const onSend = async () => {
    const contenido = texto.trim();
    if (!contenido || !API || !chatId || !userId) return;

    setSending(true);
    setTexto("");
    try {
      const res = await fetch(`${API}/chats/${chatId}/mensajes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuarioId: Number(userId), contenido }),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(txt || "Error al enviar el mensaje");
      }

      await fetchMensajes(true);
      requestAnimationFrame(() => listRef.current?.scrollToEnd({ animated: true }));
    } catch (e) {
      console.error("Error al enviar mensaje:", e);
      setTexto(contenido); // devolvemos el texto para que no se pierda lo que escribió
    } finally {
      setSending(false);
    }
  };

  const nombreTitulo = otroNombre || "Chat";

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View style={styles.header}>
          <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
            <Ionicons name="chevron-back" size={22} color={C.text} />
          </Pressable>
          <Text style={styles.headerTitle} numberOfLines={1}>
            {nombreTitulo}
          </Text>
          <View style={{ width: 36 }} />
        </View>

        {loading ? (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <ActivityIndicator color={C.accent} />
          </View>
        ) : (
          <FlatList
            ref={listRef}
            data={mensajes}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ padding: 16, gap: 8 }}
            onContentSizeChange={() => listRef.current?.scrollToEnd({ animated: false })}
            renderItem={({ item }) => {
              const esMio = item.usuarioId === userId;
              return (
                <View style={[styles.bubbleRow, esMio ? styles.bubbleRowMio : styles.bubbleRowOtro]}>
                  <View style={[styles.bubble, esMio ? styles.bubbleMio : styles.bubbleOtro]}>
                    <Text style={esMio ? styles.bubbleTextMio : styles.bubbleTextOtro}>{item.contenido}</Text>
                  </View>
                </View>
              );
            }}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                Todavía no hay mensajes. ¡Escribí el primero!
              </Text>
            }
          />
        )}

        <View style={styles.inputRow}>
          <TextInput
            value={texto}
            onChangeText={setTexto}
            placeholder="Escribí un mensaje..."
            placeholderTextColor={C.muted}
            style={styles.input}
            multiline
          />
          <Pressable
            style={[styles.sendBtn, (!texto.trim() || sending) && { opacity: 0.5 }]}
            onPress={onSend}
            disabled={!texto.trim() || sending}
          >
            <Ionicons name="send" size={18} color="#0F1310" />
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: C.card,
    borderWidth: 1,
    borderColor: C.border,
  },
  headerTitle: { color: C.text, fontSize: 17, fontWeight: "700", flex: 1, textAlign: "center" },
  bubbleRow: { flexDirection: "row" },
  bubbleRowMio: { justifyContent: "flex-end" },
  bubbleRowOtro: { justifyContent: "flex-start" },
  bubble: { maxWidth: "78%", borderRadius: 16, paddingHorizontal: 14, paddingVertical: 10 },
  bubbleMio: { backgroundColor: C.accent, borderBottomRightRadius: 4 },
  bubbleOtro: { backgroundColor: C.card, borderWidth: 1, borderColor: C.border, borderBottomLeftRadius: 4 },
  bubbleTextMio: { color: C.bg, fontSize: 15 },
  bubbleTextOtro: { color: C.text, fontSize: 15 },
  emptyText: { color: C.muted, textAlign: "center", marginTop: 40 },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: C.border,
  },
  input: {
    flex: 1,
    backgroundColor: C.card,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: C.border,
    color: C.text,
    fontSize: 15,
    maxHeight: 100,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: C.accent,
    alignItems: "center",
    justifyContent: "center",
  },
});
