import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  const onRegister = async () => {
    setErrorMessage("");  

    if (!nombre || !apellido || !email || !password || !confirmPassword) {
      setErrorMessage("Porfavor complete todos los campos requeridos.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }
  
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellido, email, password }),
      });
  
      if (!response.ok) {
        const err = await response.json();
        alert(err.error || "Error al registrarse");
        return;
      }
  
      const data = await response.json();
      console.log("Usuario registrado:", data);


      setSuccessMessage("Usuario creado con éxito.");
      setIsRedirecting(true);

      setTimeout(() => {
        router.replace("/login");
      }, 2000);
    
      
    } catch (error) {
      console.error(error);
      alert("No se pudo conectar con el servidor");
    }
  };

  const goToLogin = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView style={styles.keyboardView}
          behavior={Platform.OS === "ios" ? "padding" : "height"}>

        <View style={styles.container}>
          <Text style={styles.title}>Crear cuenta</Text>
          <Text style={styles.subtitle}>Completa los campos para registrarte</Text>

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
            value={nombre}
            onChangeText={setNombre}
            placeholder="Nombre"
            placeholderTextColor="#9aa49d"
            style={styles.input}
          />

          <TextInput
            value={apellido}
            onChangeText={setApellido}
            placeholder="Apellido"
            placeholderTextColor="#9aa49d"
            style={styles.input}
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            placeholderTextColor="#9aa49d"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            placeholderTextColor="#9aa49d"
            secureTextEntry
            style={styles.input}
          />

          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirmar contraseña"
            placeholderTextColor="#9aa49d"
            secureTextEntry
            style={styles.input}
          />

          <Pressable style={styles.btnPrimary} onPress={onRegister}>
            <Text style={styles.btnPrimaryText}>Registrarme</Text>
          </Pressable>

          <Pressable style={styles.btnGhost} onPress={goToLogin}>
            <Text style={styles.btnGhostText}>Ya tengo cuenta</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0F1310" },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 16,
  },
  title: { color: "#e8eee9", fontSize: 28, fontWeight: "700", marginBottom: 8, textAlign: "center" },
  subtitle: { color: "#9aa49d", fontSize: 16, marginBottom: 20, textAlign: "center" },
  input: {
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
    alignItems: "center",
    marginTop: 12,
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 16 },
  btnGhost: { paddingVertical: 12, alignItems: "center" },
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
