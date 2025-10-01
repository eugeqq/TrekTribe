import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function CrearGrupoScreen() {
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [maxMiembros, setMaxMiembros] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [imagenUri, setImagenUri] = useState<string | undefined>(undefined);

  const router = useRouter();

  const seleccionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImagenUri(result.assets[0].uri);
    }
  };

  const crearGrupo = () => {
    if (!nombre || !ubicacion || !maxMiembros || !fechaInicio || !fechaFin) {
      alert("Por favor completa todos los campos");
      return;
    }

    console.log("Grupo creado:", { nombre, ubicacion, maxMiembros, fechaInicio, fechaFin, imagenUri });

    
  };

  const cancelar = () => router.back();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Avatar arriba */}
        <Pressable style={styles.avatarWrap} onPress={seleccionarImagen}>
          {imagenUri ? (
            <Image source={{ uri: imagenUri }} style={styles.avatar} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarPlaceholderText}>Añadir foto del grupo</Text>
            </View>
          )}
        </Pressable>

        <Text style={styles.title}>Crear Grupo</Text>

        <TextInput
          placeholder="Nombre del grupo"
          placeholderTextColor="#9aa49d"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />

        <TextInput
          placeholder="Ubicación"
          placeholderTextColor="#9aa49d"
          value={ubicacion}
          onChangeText={setUbicacion}
          style={styles.input}
        />

        <TextInput
          placeholder="Número máximo de miembros"
          placeholderTextColor="#9aa49d"
          value={maxMiembros}
          onChangeText={setMaxMiembros}
          keyboardType="numeric"
          style={styles.input}
        />

        <TextInput
          placeholder="Fecha de inicio (DD/MM/AAAA)"
          placeholderTextColor="#9aa49d"
          value={fechaInicio}
          onChangeText={setFechaInicio}
          style={styles.input}
        />

        <TextInput
          placeholder="Fecha de fin (DD/MM/AAAA)"
          placeholderTextColor="#9aa49d"
          value={fechaFin}
          onChangeText={setFechaFin}
          style={styles.input}
        />

        <Pressable style={styles.btnPrimary} onPress={crearGrupo}>
          <Text style={styles.btnPrimaryText}>Crear grupo</Text>
        </Pressable>

        <Pressable style={styles.btnGhost} onPress={cancelar}>
          <Text style={styles.btnGhostText}>Cancelar</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: { padding: 16, gap: 16, alignItems: "center" },

  avatarWrap: { marginBottom: 16 },
  avatar: { width: 120, height: 120, borderRadius: 60, backgroundColor: "#222" },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarPlaceholderText: { color: "#9aa49d", fontSize: 16, textAlign: "center" },

  title: { color: "#e8eee9", fontSize: 28, fontWeight: "700", marginBottom: 8, textAlign: "center" },

  input: {
    width: "100%",
    backgroundColor: "#1a1f1b",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#2a322b",
    color: "#e8eee9",
    fontSize: 16,
  },

  btnPrimary: {
    backgroundColor: "#4B5320",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignItems: "center",
    width: "100%",
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 16 },

  btnGhost: { paddingVertical: 12, alignItems: "center", width: "100%" },
  btnGhostText: { color: "#9ec39f", fontSize: 14, fontWeight: "600" },
});
