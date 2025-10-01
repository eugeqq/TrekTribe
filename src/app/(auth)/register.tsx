import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";

export default function RegisterScreen() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const onRegister = () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    // Aquí pondrías la lógica de registro (API, Firebase, etc.)
    console.log("Nuevo usuario:", { nombre, apellido, email });
    // router.replace("/(tabs)"); // Después de registrarse, ir a las tabs
  };

  const goToLogin = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Crear cuenta</Text>
        <Text style={styles.subtitle}>Completa los campos para registrarte</Text>

        <TextInput
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre"
          placeholderTextColor="#9aa49d"
          style={styles.input}
        />

        <TextInput
          value={nombre}
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
});
