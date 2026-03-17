import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { authService } from "../../lib/auth";
import { useAuth } from "../../lib/authContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { refresh } = useAuth();

  const onLogin = async () => {
    setErrorMessage("");
    setIsBlocked(false);
    setLoading(true);

    if (!email || !password) {
      setErrorMessage("Por favor, completa todos los campos");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data;
      let errorMessage = "";

      // Intentar parsear como JSON primero
      try {
        data = await response.json();
        errorMessage = data.error || data.message || "";
      } catch (jsonError) {
        // Si no es JSON, intentar leer como texto plano (para rate limiter)
        try {
          const textResponse = await response.text();
          errorMessage = textResponse;
        } catch (textError) {
          errorMessage = `Error ${response.status}`;
        }
      }

      if (!response.ok) {
        // Verificar si es el mensaje de bloqueo por demasiados intentos
        if (errorMessage.includes("Demasiados intentos de login") ||
            response.status === 429) {
          setIsBlocked(true);
          setErrorMessage("Demasiados intentos de login. Inténtalo de nuevo en 15 minutos.");
        } else {
          setErrorMessage(errorMessage || "Email o contraseña incorrectos");
        }
        setLoading(false);
        return;
      }

      // Guardar sesión con JWT token
      await authService.saveSession({
        id: data.id.toString(),
        email: email,
        token: data.token,
        nombre: data.nombre,
        apellido: data.apellido,
      });
      console.log("[LOGIN] session after save:", await authService.getSession());

      // Refrescar el contexto para que detecte la nueva sesión
      await refresh();

      router.replace("/(tabs)/tribes");
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
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
          <View style={[styles.errorBox, isBlocked && styles.blockedBox]}>
            <Text style={[styles.errorText, isBlocked && styles.blockedText]}>
              {errorMessage}
            </Text>
            {isBlocked && (
              <Text style={styles.blockedSubtext}>
                ⏱️ Espera 15 minutos antes de intentar nuevamente
              </Text>
            )}
          </View>
        ) : null}

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor="#9aa49d"
          keyboardType="email-address"
          autoCapitalize="none"
          style={[styles.input, isBlocked && styles.inputDisabled]}
          editable={!isBlocked && !loading}
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#9aa49d"
          secureTextEntry
          style={[styles.input, isBlocked && styles.inputDisabled]}
          editable={!isBlocked && !loading}
        />

        <Pressable
          style={[styles.btnPrimary, (isBlocked || loading) && styles.btnDisabled]}
          onPress={onLogin}
          disabled={isBlocked || loading}
        >
          <Text style={[styles.btnPrimaryText, (isBlocked || loading) && styles.btnDisabledText]}>
            {loading ? "Cargando..." : isBlocked ? "Cuenta bloqueada" : "Ingresar"}
          </Text>
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
  blockedBox: {
    backgroundColor: "#403018", // Color más oscuro para bloqueo
    borderColor: "#cc6b2b", // Color naranja para bloqueo
  },
  blockedText: {
    color: "#ffb366", // Color naranja más claro
    fontSize: 16,
    fontWeight: "700",
  },
  blockedSubtext: {
    color: "#cc9e66",
    fontSize: 14,
    textAlign: "center",
    marginTop: 8,
    fontStyle: "italic",
  },
  inputDisabled: {
    opacity: 0.5,
    backgroundColor: "#151915",
  },
  btnDisabled: {
    backgroundColor: "#2a322b",
    opacity: 0.6,
  },
  btnDisabledText: {
    color: "#666",
  },
});
