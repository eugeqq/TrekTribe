import { Ionicons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { toImageUrl } from "../../lib/url";

type Miembro = { id: string | number; nombre: string };
type Grupo = {
  id: string | number;
  nombre: string;
  ubicacion?: string;
  descripcion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  foto?: string | null;        // legacy
  imagen?: string | null;      // relativa
  imagenUrl?: string | null;   // absoluta
  miembros?: Miembro[];
};

export default function GrupoScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ id?: string; grupo?: string }>();
  const idParam = params.id;
  const grupoParam = params.grupo; 

  const [data, setData] = useState<Grupo | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        
        if (grupoParam) {
          console.log("singleTribe: recibiendo grupo por params (no fetch).");
          try {
            const parsed = JSON.parse(String(grupoParam));
            // normalizar estructura si hace falta
            const miembros =
              Array.isArray(parsed.miembros) && parsed.miembros.length > 0
                ? parsed.miembros.map((m: any) =>
                    typeof m === "string" ? { id: m, nombre: m } : { id: m.id ?? m.usuarioId ?? m.name ?? m.nombre, nombre: m.nombre ?? `${m.usuario?.nombre ?? ""} ${m.usuario?.apellido ?? ""}`.trim() }
                  )
                : Array.isArray(parsed.miembrosNombres)
                ? parsed.miembrosNombres.map((n: string, i: number) => ({ id: i + 1, nombre: n }))
                : [];

            const normalized: Grupo = {
              id: parsed.id,
              nombre: parsed.nombre,
              ubicacion: parsed.ubicacion,
              descripcion: parsed.descripcion,
              fechaInicio: parsed.fechaInicio,
              fechaFin: parsed.fechaFin,
              imagenUrl: parsed.imagenUrl ?? null,
              imagen: parsed.imagen ?? null,
              foto: parsed.foto ?? null,
              miembros,
            };
            if (!cancel) setData(normalized);
            return;

      } catch (e: any) {
       console.warn("singleTribe: fallo al parsear param grupo:", e);
      
      } 
    }
    if (!idParam) {
          throw new Error("Falta el id del grupo (params)");
        }

        const id = String(idParam);
        const url = `${process.env.EXPO_PUBLIC_API_URL}/viajes/detalle/${id}`;
        console.log("singleTribe: fetch ->", url);

        const res = await fetch(url);
        const text = await res.text();
        console.log("singleTribe: HTTP", res.status, "body:", text);

        if (!res.ok) {
          // tratar de parsear JSON de error si existe
          let message = `HTTP ${res.status}`;
          try {
            const j = JSON.parse(text);
            message = j.error ?? JSON.stringify(j);
          } catch {}
          throw new Error(message);
        }

        const jsonData = (() => {
          try { return JSON.parse(text); }
          catch { return text as any; }
        })();

        console.log("singleTribe: jsonData ->", jsonData);

        // Normalizar: el backend puede devolver:
        // - miembros: [{ usuario: {...} }] o [{ id, nombre }]
        // - o miembrosNombres: ["Juan Pérez", ...]
        // - imagen o foto
        let miembros: Miembro[] = [];
        if (Array.isArray(jsonData.miembros)) {
          miembros = jsonData.miembros.map((m: any) => {
            if (typeof m === "string") return { id: m, nombre: m };
            // si viene {usuario: {...}}
            if (m.usuario) {
              const nombre = `${m.usuario.nombre ?? ""} ${m.usuario.apellido ?? ""}`.trim();
              return { id: m.usuario.id ?? m.id ?? `${m.usuario.nombre}`, nombre: nombre || String(m.usuario.id) };
            }
            // si viene {id, nombre}
            return { id: m.id ?? m.usuarioId ?? m.miembroId ?? JSON.stringify(m), nombre: m.nombre ?? m.name ?? String(m.id) };
          });
        } else if (Array.isArray(jsonData.miembrosNombres)) {
          miembros = jsonData.miembrosNombres.map((n: string, i: number) => ({ id: i + 1, nombre: n }));
        }

        const normalized: Grupo = {
          id: jsonData.id,
          nombre: jsonData.nombre ?? jsonData.nombreGrupo ?? "Grupo",
          ubicacion: jsonData.ubicacion,
          descripcion: jsonData.descripcion,
          fechaInicio: jsonData.fechaInicio,
          fechaFin: jsonData.fechaFin,
          imagenUrl: jsonData.imagenUrl ?? null,
          imagen: jsonData.imagen ?? null,
          foto: jsonData.foto ?? null,
          miembros,
        };

        if (!cancel) setData(normalized);
      } catch (e: any) {
        console.error("singleTribe: error cargando grupo ->", e);
        if (!cancel) setErr(String(e.message ?? e));
      } finally {
        if (!cancel) setLoading(false);
      }

    })();
    return () => { cancel = true; };
  }, [idParam, grupoParam]);

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
  const DEFAULT_IMG =
  "";

// forzamos a string para que <Image source={{uri}}/> no se queje
  const foto: string =
    toImageUrl(data.imagenUrl ?? data.imagen ?? data.foto) ?? DEFAULT_IMG;
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
          <Link href={{ pathname: "/(stack)/expenses", params: { grupo: JSON.stringify(data) }, }} asChild>
            <Pressable key={"gastos"} style={styles.funcButton}>
              <Text style={styles.funcButtonText}>Gastos</Text>
            </Pressable>
          </Link>

    
          <Link href={{ pathname: "/(stack)/toDos", params: { grupoId: String(data.id) } }} asChild>
            <Pressable key={"tareas"} style={styles.funcButton}>
              <Text style={styles.funcButtonText}>Tareas</Text>
            </Pressable>
          </Link>

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
