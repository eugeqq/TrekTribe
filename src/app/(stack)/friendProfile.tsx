import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { authFetch } from "../../lib/authFetch";

type Grupo = { id: number; nombre: string };

export default function PerfilAmigoScreen() {
  const raw = useLocalSearchParams<{
    id?: string;
    nombre?: string;
    apellido?: string;
    telefono?: string;
    fechaNacimiento?: string;
    dni?: string;
    apodo?: string;
    avatarUri?: string;
    grupos?: string;
    viajeId?: string;
  }>();

  const API = process.env.EXPO_PUBLIC_API_URL;

  const [loading, setLoading] = useState(false);
  const [nombre, setNombre] = useState(raw.nombre ?? "Invitado");
  const [apellido, setApellido] = useState(raw.apellido ?? "");
  const [telefono, setTelefono] = useState(raw.telefono ?? "—");
  const [fechaNacimiento, setFechaNacimiento] = useState(raw.fechaNacimiento ?? "—");
  const [dni, setDni] = useState(raw.dni ?? "—");
  const [apodo, setApodo] = useState(raw.apodo ?? "");
  const [avatarUri, setAvatarUri] = useState(
    raw.avatarUri && raw.avatarUri.length ? raw.avatarUri : "https://i.pravatar.cc/200"
  );
  const [grupos, setGrupos] = useState<Grupo[]>(() => {
    try {
      if (raw.grupos) {
        const parsed = JSON.parse(String(raw.grupos));
        if (Array.isArray(parsed)) return parsed as Grupo[];
      }
    } catch {}
    return [] as Grupo[];
  });

  useEffect(() => {
    // Si recibimos id, consultamos al backend para obtener el perfil completo
    const id = raw.id;
    if (!id || !API) return;
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        const res = await authFetch(`${API}/user/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const j = await res.json();
        if (cancelled) return;
        setNombre(j.nombre ?? nombre);
        setApellido(j.apellido ?? "");
        setTelefono(j.telefono ?? telefono ?? "—");
        setFechaNacimiento(j.fechaNacimiento ?? fechaNacimiento ?? "—");
        setDni(j.dni ?? dni ?? "—");
        setApodo(j.apodo ?? "");
        setAvatarUri(j.avatarUri || j.avatar || avatarUri);
        if (Array.isArray(j.grupos)) setGrupos(j.grupos as Grupo[]);
      } catch (e) {
        console.error("friendProfile fetch error", e);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [raw.id, API]);

  
  

  const eliminarAmigo = () => {
    const id = raw.id;
    const viajeId = raw.viajeId;
    if (!id || !viajeId || !API) return;

    Alert.alert("Eliminar de la tribu", `¿Seguro que querés eliminar a ${nombre} de esta tribu?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          try {
            const res = await authFetch(`${API}/viajes/${viajeId}/miembros/${id}`, { method: "DELETE" });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            router.back();
          } catch (e) {
            console.error("Error al eliminar de la tribu:", e);
            Alert.alert("Error", "No se pudo eliminar de la tribu.");
          }
        },
      },
    ]);
  };

  const irAGrupo = (grupoId: number) => {
    router.push({ pathname: "/(stack)/singleTribe", params: { id: String(grupoId) } });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={22} color="#e8eee9" />
        </Pressable>
        
        <View style={styles.avatarWrap}>
          {loading ? (
            <View style={{ width: 120, height: 120, alignItems: "center", justifyContent: "center" }}>
              <ActivityIndicator />
            </View>
          ) : (
            <Image source={{ uri: avatarUri }} style={styles.avatar} />
          )}
        </View>

        
        <View style={styles.infoBox}>
          <InfoRow label="Nombre" value={nombre} />
          {!!apellido && <InfoRow label="Apellido" value={apellido} />}
          <InfoRow label="Teléfono" value={telefono} />
          <InfoRow label="Fecha de nacimiento" value={fechaNacimiento} />
          <InfoRow label="DNI" value={dni} />
          {!!apodo && <InfoRow label="Apodo" value={apodo} />}
        </View>

        
        <View style={[styles.infoBox, { marginTop: 16 }]}>
          <Text style={styles.sectionTitle}>Grupos en común</Text>
          {grupos.length === 0 ? (
            <Text style={{ color: "#9aa49d" }}>Sin grupos</Text>
          ) : (
            grupos.map((g) => (
              <Pressable key={g.id} style={styles.groupButton} onPress={() => irAGrupo(g.id)}>
                <Text style={styles.groupButtonText}>{g.nombre}</Text>
              </Pressable>
            ))
          )}
        </View>

        
        <Pressable style={styles.btnPrimary} onPress={eliminarAmigo}>
          <Text style={styles.btnPrimaryText}>Eliminar amigo</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}


function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: { padding: 16, gap: 16, alignItems: "center" },

  avatarWrap: { marginTop: 16, marginBottom: 12 },
  avatar: { width: 120, height: 120, borderRadius: 60, backgroundColor: "#222" },

  infoBox: {
    width: "100%",
    backgroundColor: "#1a1f1b",
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  rowLabel: { color: "#9aa49d", fontSize: 14, fontWeight: "600" },
  rowValue: { color: "#e8eee9", fontSize: 16, fontWeight: "700" },

  sectionTitle: { color: "#9aa49d", fontWeight: "500", fontSize: 16, marginBottom: 8 },

  groupButton: {
    backgroundColor: "#2a322b",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  groupButtonText: { color: "#9ec39f", fontWeight: "600" },

  btnPrimary: {
    backgroundColor: "#993333",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    marginTop: 24,
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 16 },
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
  
});
