import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

type Miembro = { id: string | number; nombre: string };
type Grupo = {
  id: string | number;
  nombre: string;
  ubicacion?: string;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  foto?: string | null;
  miembros?: Miembro[];
};

export default function GrupoScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();

  const [data, setData] = useState<Grupo | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        if (!id) throw new Error("Falta el id del grupo");
        setLoading(true);
        setErr(null);

        
        const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/viajes/${id}`, {
       
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json: Grupo = await res.json();
        if (!cancel) setData(json);
      } catch (e: any) {
        if (!cancel) setErr(e.message ?? "Error desconocido");
      } finally {
        if (!cancel) setLoading(false);
      }
    })();
    return () => { cancel = true; };
  }, [id]);

  if (loading) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator />
          <Text style={{ color: "#e8eee9", marginTop: 8 }}>Cargando grupo…</Text>
        </View>
      </SafeAreaView>
    );
  }

  if (err || !data) {
    return (
      <SafeAreaView style={styles.safe}>
        <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={22} color="#e8eee9" />
        </Pressable>
        <View style={{ padding: 16 }}>
          <Text style={{ color: "#ff8a8a" }}>No se pudo cargar el grupo: {err ?? "Sin datos"}</Text>
        </View>
      </SafeAreaView>
    );
  }

  // --- datos desde el backend ---
  const nombreGrupo   = data.nombre ?? "Grupo";
  const ubicacion     = data.ubicacion ?? "Sin ubicación";
  const miembros      = data.miembros ?? [];
  const miembrosCount = miembros.length;
  const foto          = data.foto && data.foto.length > 0
    ? data.foto
    : "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d";
  const descripcion   = data.descripcion ?? "Descripción no disponible.";
  const fechaInicio   = data.fechaInicio ?? "—";
  const fechaFin      = data.fechaFin ?? "—";

  const handlePress = (funcionalidad: string) => {
    alert(`Ir a: ${funcionalidad}`);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Pressable style={styles.backBtn} onPress={() => router.back()} hitSlop={10}>
          <Ionicons name="chevron-back" size={22} color="#e8eee9" />
        </Pressable>

        <View style={styles.portadaWrap}>
          <Image
            source={{ uri: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" }}
            style={styles.portada}
          />
          <View style={styles.avatarOverlay}>
            <Image source={{ uri: foto }} style={styles.avatar} />
          </View>
        </View>

        <Text style={styles.groupName}>{nombreGrupo}</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{descripcion}</Text>
          <Text style={styles.infoSubText}>Ubicación: {ubicacion}</Text>
          <Text style={styles.infoSubText}>Fechas: {fechaInicio} - {fechaFin}</Text>
          <Text style={styles.infoSubText}>Total miembros: {miembrosCount}</Text>

          <Text style={[styles.infoSubText, { marginTop: 8 }]}>Miembros:</Text>
          <View style={styles.membersRow}>
            {miembros.map((m) => (
              <Pressable
                key={String(m.id ?? m.nombre)}
                style={styles.memberButton}
                onPress={() =>
                  router.push({
                    pathname: "/(stack)/friendProfile",
                    params: { nombre: m.nombre, apellido: "", telefono: "", fechaNacimiento: "", dni: "", apodo: "", avatarUri: "" },
                  })
                }
              >
                <Text style={styles.memberName}>{m.nombre}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <Link href={{ pathname: "/(stack)/expenses", params: { grupoId: String(data.id) } }} asChild>
            <Pressable key={"gastos"} style={styles.funcButton}>
              <Text style={styles.funcButtonText}>Gastos</Text>
            </Pressable>
          </Link>

          {["Tareas","Chat","Mapas","Documentos"].map((func) => (
            <Pressable key={func} style={styles.funcButton} onPress={() => handlePress(func)}>
              <Text style={styles.funcButtonText}>{func}</Text>
            </Pressable>
          ))}

          <Link href={{ pathname: "/(stack)/itinerary", params: { viajeId: String(data.id), nombre: data.nombre } }} asChild>
            <Pressable key={"itinerario"} style={styles.funcButton}>
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

  portadaWrap: { width: "100%", position: "relative", marginBottom: 60 },
  portada: { width: "100%", height: 180, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 },

  avatarOverlay: {
    position: "absolute",
    bottom: -40,
    left: "50%",
    marginLeft: -40,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#0F1310",
    overflow: "hidden",
  },
  avatar: { width: 80, height: 80, borderRadius: 40 },

  groupName: { marginTop: 12, fontSize: 22, fontWeight: "700", color: "#e8eee9", textAlign: "center" },

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
  funcButtonText: { color: "#e8eee9", fontWeight: "600", textAlign: "center" },
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
    // sombrita sutil
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
});
