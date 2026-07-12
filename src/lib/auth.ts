import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "../constants";

interface AuthData {
  id: string;
  email: string;
  token: string;
  nombre: string;
  apellido: string;
  expiresAt?: number; // epoch ms; se calcula al guardar la sesión
}

const AUTH_STORAGE_KEY = "auth_session";
// Igual al expiresIn: "7d" con el que login.ts firma el JWT.
const SESSION_DURATION_MS = 7 * 24 * 60 * 60 * 1000;

export const authService = {
  // Guardar sesión después de login (con JWT)
  async saveSession(authData: AuthData) {
    try {
      const withExpiry: AuthData = { ...authData, expiresAt: Date.now() + SESSION_DURATION_MS };
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(withExpiry));
      // Además guardamos `userId` por compatibilidad con pantallas que lo leen directamente
      await AsyncStorage.setItem("userId", authData.id.toString());
    } catch (error) {
      console.error("Error saving session:", error);
    }
  },

  // Token JWT de la sesión actual, si hay una
  async getToken(): Promise<string | null> {
    const session = await this.getSession();
    return session?.token ?? null;
  },

  // Obtener sesión guardada. Si ya venció localmente, la limpia y devuelve
  // null sin esperar a que el servidor la rechace.
  async getSession(): Promise<AuthData | null> {
    try {
      const session = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
      if (!session) return null;

      const parsed: AuthData = JSON.parse(session);
      if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
        await this.logout();
        return null;
      }

      return parsed;
    } catch (error) {
      console.error("Error getting session:", error);
      return null;
    }
  },

  // Verificar si hay sesión activa
  async isSessionValid(): Promise<boolean> {
    const session = await this.getSession();
    return session !== null;
  },

  // Cerrar sesión: revoca el token en el servidor (best-effort) y recién
  // después limpia el almacenamiento local.
  async logout() {
    try {
      const raw = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
      const token = raw ? (JSON.parse(raw) as AuthData).token : null;
      if (token) {
        await fetch(`${API_URL}/login/logout`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        }).catch(() => {
          // Si no hay red, igual cerramos sesión localmente.
        });
      }
    } catch (error) {
      console.error("Error revocando el token en el servidor:", error);
    } finally {
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
      await AsyncStorage.removeItem("userId");
    }
  },

  // Validar sesión con el servidor (usando JWT como Bearer token)
  async validateSessionWithServer(authData: AuthData): Promise<boolean> {
    try {
      const response = await fetch(`${API_URL}/login/validate-session`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authData.token}`,
        },
      });

      if (!response.ok) {
        // Token inválido o expirado
        await this.logout();
        return false;
      }

      return true;
    } catch (error) {
      console.error("Error validating session:", error);
      return false;
    }
  },
};
