import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CrearGrupoScreen() {
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [imagenUri, setImagenUri] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  const router = useRouter();

  const seleccionarImagen = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });
    if (!result.canceled) setImagenUri(result.assets[0].uri);
  };

  const validarFecha = (fecha: string) => {
    if (!fecha) return false;
    const clean = fecha.trim().replace(/-/g, "/");
    const match = clean.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) return false;
  
    const [_, dd, mm, yyyy] = match.map(Number);
    const date = new Date(yyyy, mm - 1, dd);
    return (
      date.getFullYear() === yyyy &&
      date.getMonth() === mm - 1 &&
      date.getDate() === dd
    );
  };

  const onCreateTribe = async () => {
    setErrorMessage("");  

    if (!nombre || !ubicacion || !descripcion || !fechaInicio || ! fechaFin) {
      setErrorMessage("Porfavor complete todos los campos requeridos.");
      return;
    }

    if (!validarFecha(fechaInicio) || !validarFecha(fechaFin)) {
      setErrorMessage("Formato de fecha inválido (use DD/MM/AAAA)");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("nombre", nombre);
      formData.append("ubicacion", ubicacion);
      formData.append("descripcion", descripcion);
      formData.append("fechaInicio", fechaInicio);
      formData.append("fechaFin", fechaFin);
      formData.append("creadorId", "1");

      if (imagenUri) {
        formData.append("imagen", {
          uri: imagenUri,
          name: "tribe.jpg",
          type: "image/jpeg",
        } as any);
      }

      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/tribes`, {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        const err = await response.json();
        alert(err.error || "Error al crear tribu");
        return;
      }
  
      const data = await response.json();
      console.log("Tribu creada", data);


      setSuccessMessage("Tribu creado con éxito.");
      setIsRedirecting(true);

      setTimeout(() => {
        router.replace("/(tabs)/tribes");
      }, 2000);
    
      
    } catch (error) {
      console.error(error);
      alert("No se pudo conectar con el servidor");
    }
  };

  const cancelar = () => router.back();

  const ready =
    nombre && ubicacion && fechaInicio && fechaFin;

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={styles.keyboardView}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Pressable style={styles.avatarWrap} onPress={seleccionarImagen}>
            {imagenUri ? (
              <Image source={{ uri: imagenUri }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarPlaceholderText}>Añadir foto de tribu</Text>
              </View>
            )}
          </Pressable>

          <Text style={styles.title}>Crear Tribu</Text>
            {errorMessage ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>{errorMessage}</Text>
              </View>
            ) : null}
            
            {successMessage ? (
              <View style={styles.successBox}>
                <Text style={styles.successText}>{successMessage}</Text>
                {isRedirecting && (
                  <View style={styles.redirectContainer}>
                    <ActivityIndicator size="small" color="#b8f5b8" />
                    <Text style={styles.redirectText}>Redirigiendo...</Text>
                  </View>
                )}
              </View>
            ) : null}

          <TextInput
            placeholder="Nombre de Tribu"
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
            placeholder="Descripción"
            placeholderTextColor="#9aa49d"
            value={descripcion}
            onChangeText={setDescripcion}
            style={[styles.input, styles.inputMultiline]}
            multiline
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

          <Pressable
            style={[styles.btnPrimary, !ready && { opacity: 0.5 }]}
            onPress={onCreateTribe}
            disabled={!ready}
          >
            <Text style={styles.btnPrimaryText}>Crear tribu</Text>
          </Pressable>

          <Pressable style={styles.btnGhost} onPress={cancelar}>
            <Text style={styles.btnGhostText}>Cancelar</Text>
          </Pressable>
        </ScrollView>

      </KeyboardAvoidingView>
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

  title: {
    color: "#e8eee9",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },

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
  inputMultiline: {
    minHeight: 90,
    textAlignVertical: "top",
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
    successBox: {
      backgroundColor: "#1d3a22",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: "#2f7037",
    },
    successText: { color: "#b8f5b8", textAlign: "center", fontWeight: "600" },
    redirectContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
    },
    redirectText: {
      color: "#b8f5b8",
      textAlign: "center",
      fontSize: 14,
      fontWeight: "500",
    },
    keyboardView: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 24,
      paddingBottom: Platform.OS === "ios" ? 30 : 0,
    },
});
