import { useRouter, useSegments } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { authService } from "../lib/auth";

interface AuthContextType {
  isLoading: boolean;
  isSignedIn: boolean;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
}

const AuthContext = React.createContext<AuthContextType | undefined>(
  undefined
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const router = useRouter();
  const segments = useSegments();

  // Función para verificar sesión
  const checkSession = useCallback(async () => {
    try {
      const session = await authService.getSession();

      if (session) {
        const isValid = await authService.validateSessionWithServer(session);
        setIsSignedIn(isValid);
      } else {
        setIsSignedIn(false);
      }
    } catch (error) {
      console.error("Error checking session:", error);
      setIsSignedIn(false);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Restaurar sesión al abrir la app
  useEffect(() => {
    checkSession();
  }, [checkSession]);

  // Redirigir según el estado de autenticación
  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isSignedIn && !inAuthGroup) {
      router.replace("/(auth)/login");
    } else if (isSignedIn && inAuthGroup) {
      router.replace("/(tabs)/tribes");
    }
  }, [isSignedIn, isLoading, segments, router]);

  const logout = async () => {
    await authService.logout();
    setIsSignedIn(false);
    router.replace("/(auth)/login");
  };

  return (
    <AuthContext.Provider value={{ isLoading, isSignedIn, logout, refresh: checkSession }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de AuthProvider");
  }
  return context;
}
