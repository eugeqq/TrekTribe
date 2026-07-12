import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ActivityIndicator, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { API_URL } from "../../constants";
import { C } from "../../theme";

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

  // Estados para validación en tiempo real
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  // Funciones de validación en tiempo real
  const validateEmail = (emailValue: string) => {
    if (emailValue.trim() === "") {
      setEmailValid(null);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(emailValue.trim()));
  };

  const validatePassword = (passwordValue: string) => {
    if (passwordValue === "") {
      setPasswordValid(null);
      return;
    }
    setPasswordValid(passwordValue.length >= 8);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    validateEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    validatePassword(value);
  };

  const onRegister = async () => {
    setErrorMessage("");

    if (!nombre || !apellido || !email || !password || !confirmPassword) {
      setErrorMessage("Por favor complete todos los campos requeridos.");
      return;
    }

    // ✅ Validación de formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMessage("Por favor ingresa un email válido.");
      return;
    }

    // ✅ Validación de longitud mínima de contraseña
    if (password.length < 8) {
      setErrorMessage("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }
  
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellido, email, password }),
      });
  
      if (!response.ok) {
        const err = await response.json();
        alert(err.error || "Error al registrarse");
        return;
      }
  
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
            placeholderTextColor={C.muted}
            style={styles.input}
          />

          <TextInput
            value={apellido}
            onChangeText={setApellido}
            placeholder="Apellido"
            placeholderTextColor={C.muted}
            style={styles.input}
          />

          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              onChangeText={handleEmailChange}
              placeholder="Email"
              placeholderTextColor={C.muted}
              keyboardType="email-address"
              autoCapitalize="none"
              style={[
                styles.input,
                emailValid === true && styles.inputValid,
                emailValid === false && styles.inputInvalid
              ]}
            />
            {emailValid !== null && (
              <Text style={[
                styles.validationText,
                emailValid ? styles.textValid : styles.textInvalid
              ]}>
                {emailValid ? "✓ Email válido" : "✗ Email inválido"}
              </Text>
            )}
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              value={password}
              onChangeText={handlePasswordChange}
              placeholder="Contraseña (mínimo 8 caracteres)"
              placeholderTextColor={C.muted}
              secureTextEntry
              style={[
                styles.input,
                passwordValid === true && styles.inputValid,
                passwordValid === false && styles.inputInvalid
              ]}
            />
            {passwordValid !== null && (
              <Text style={[
                styles.validationText,
                passwordValid ? styles.textValid : styles.textInvalid
              ]}>
                {passwordValid ? "✓ Contraseña segura" : "✗ Mínimo 8 caracteres"}
              </Text>
            )}
          </View>

          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirmar contraseña"
            placeholderTextColor={C.muted}
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
  safe: { flex: 1, backgroundColor: C.bg },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    gap: 16,
  },
  title: { color: C.text, fontSize: 28, fontWeight: "700", marginBottom: 8, textAlign: "center" },
  subtitle: { color: C.muted, fontSize: 16, marginBottom: 20, textAlign: "center" },
  input: {
    backgroundColor: C.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: C.border,
    color: C.text,
    fontSize: 16,
  },
  btnPrimary: {
    backgroundColor: C.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 12,
  },
  btnPrimaryText: { color: "white", fontWeight: "700", fontSize: 16 },
  btnGhost: { paddingVertical: 12, alignItems: "center" },
  btnGhostText: { color: C.accent, fontSize: 14, fontWeight: "600" },
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
  inputContainer: {
    gap: 4,
  },
  inputValid: {
    borderColor: "#2f7037", // Verde para válido
  },
  inputInvalid: {
    borderColor: "#aa2b2b", // Rojo para inválido
  },
  validationText: {
    fontSize: 12,
    fontWeight: "500",
    paddingHorizontal: 4,
  },
  textValid: {
    color: "#4ade80", // Verde claro
  },
  textInvalid: {
    color: "#ff9e9e", // Rojo claro
  },
});
