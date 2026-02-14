import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

interface AuthData {
  id: string;
  email: string;
  token: string;
  nombre: string;
  apellido: string;
}

const AUTH_STORAGE_KEY = "auth_session";

export const authService = {
  // Guardar sesión después de login (con JWT)
  async saveSession(authData: AuthData) {
    try {
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authData));
      // Además guardamos `userId` por compatibilidad con pantallas que lo leen directamente
      await AsyncStorage.setItem("userId", authData.id.toString());
      console.log("[AUTH] saved session:", { id: authData.id, tokenLength: authData.token?.length ?? 0 });
    } catch (error) {
      console.error("Error saving session:", error);
    }
  },

  // Obtener sesión guardada
  async getSession(): Promise<AuthData | null> {
    try {
      const session = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
      console.log("[AUTH] getSession raw:", session);
      return session ? JSON.parse(session) : null;
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

  // Cerrar sesión
  async logout() {
    try {
      await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
      await AsyncStorage.removeItem("userId");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  },

  // Validar sesión con el servidor (usando JWT)
  async validateSessionWithServer(authData: AuthData): Promise<boolean> {
    try {
      const response = await fetch(`${API_URL}/login/validate-session`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          token: authData.token
        }),
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
