import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 
  const router = useRouter();

  const onLogin = async () => {
    setErrorMessage("");  

    if (!email || !password) {
      setErrorMessage("Por favor, completa todos los campos");
      return;
    }

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage("Email o contraseña incorrectos");
        return;
      }

      router.replace("/(tabs)/tribes");
    } catch (error) {
      console.error(error);
      setErrorMessage("No se pudo conectar con el servidor");
    }
  };

  const createAccount = () => {
    router.push("/register");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a tu Tribu</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>

        
        {errorMessage ? (
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        ) : null}

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

        <Pressable style={styles.btnPrimary} onPress={onLogin}>
          <Text style={styles.btnPrimaryText}>Ingresar</Text>
        </Pressable>

        <Pressable style={styles.btnSecondary} onPress={createAccount}>
          <Text style={styles.btnSecondaryText}>No tengo cuenta</Text>
        </Pressable>

        <Pressable style={styles.btnGhost}>
          <Text style={styles.btnGhostText}>¿Olvidaste tu contraseña?</Text>
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
  title: {
    color: "#e8eee9",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
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
  btnSecondary: {
    backgroundColor: "#2a322b",
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  btnSecondaryText: { color: "#e8eee9", fontWeight: "700", fontSize: 16 },
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
});
