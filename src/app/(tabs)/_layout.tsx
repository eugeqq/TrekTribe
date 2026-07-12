import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { API_URL } from "../../constants";
import { authFetch } from "../../lib/authFetch";
import { C as COLORS } from "../../theme";

// Cada cuánto se fija si hay algún chat sin leer, para pintar el puntito
// azul sobre el ícono de la pestaña "Chats" (sin depender de estar parado
// en esa pantalla).
const UNREAD_POLL_INTERVAL_MS = 4000;

export default function TabsLayout() {
  const [hasUnreadChats, setHasUnreadChats] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let cancelado = false;

    const checkUnread = async () => {
      try {
        const uid = await AsyncStorage.getItem("userId");
        if (!uid || !API_URL) {
          if (!cancelado) setHasUnreadChats(false);
          return;
        }
        const [res, tribeRes] = await Promise.all([
          authFetch(`${API_URL}/chats/usuario/${uid}`),
          authFetch(`${API_URL}/viajes/usuario/${uid}/chats`),
        ]);
        const data = await res.json();
        const tribeData = await tribeRes.json();
        if (!cancelado) {
          const hayNoLeidoPrivado = Array.isArray(data) && data.some((c: any) => c.noLeido);
          const hayNoLeidoTribu = Array.isArray(tribeData) && tribeData.some((c: any) => c.noLeido);
          setHasUnreadChats(hayNoLeidoPrivado || hayNoLeidoTribu);
        }
      } catch (error) {
        // Silencioso: no queremos romper la barra de pestañas por un error de red.
      }
    };

    checkUnread();
    pollRef.current = setInterval(checkUnread, UNREAD_POLL_INTERVAL_MS);

    return () => {
      cancelado = true;
      if (pollRef.current) clearInterval(pollRef.current);
      pollRef.current = null;
    };
  }, [API_URL]);

  return (
    <Tabs
      initialRouteName="tribes"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.subtext,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabLabel,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name="tribes"
        options={{
          title: "Tribe",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "people" : "people-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: "Chats",
          tabBarIcon: ({ color, size, focused }) => (
            <View style={styles.tabIconWrap}>
              <Ionicons
                name={focused ? "chatbubble-ellipses" : "chatbubble-ellipses-outline"}
                color={color}
                size={size}
              />
              {hasUnreadChats && <View style={styles.tabUnreadDot} />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.bg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    height: 60,
    paddingTop: 1,
    paddingBottom:10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "700",
    marginTop: 2,
  },
  tabIconWrap: {
    position: "relative",
  },
  tabUnreadDot: {
    position: "absolute",
    top: -3,
    right: -6,
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: "#3B82F6",
    borderWidth: 1.5,
    borderColor: COLORS.bg,
  },
});
