import { authService } from "./auth";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  status: number;
}

/**
 * Realiza peticiones HTTP con token JWT automático
 * @param endpoint - Ruta del endpoint (ej: "/login")
 * @param options - Opciones de fetch
 * @returns Response u null si hay error de autenticación
 */
export async function apiCall(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response | null> {
  try {
    const token = await authService.getToken();
    const url = `${API_URL}${endpoint}`;

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      ...options.headers,
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Si el token expiró (401), logout automático
    if (response.status === 401) {
      console.log("[API] Token expired, logging out");
      await authService.logout();
      return null;
    }

    return response;
  } catch (error) {
    console.error("[API] Error in apiCall:", error);
    return null;
  }
}

/**
 * Realiza una petición GET
 */
export async function apiGet<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await apiCall(endpoint, {
    method: "GET",
  });

  return await parseApiResponse<T>(response);
}

/**
 * Realiza una petición POST
 */
export async function apiPost<T>(
  endpoint: string,
  body: any
): Promise<ApiResponse<T>> {
  const response = await apiCall(endpoint, {
    method: "POST",
    body: JSON.stringify(body),
  });

  return await parseApiResponse<T>(response);
}

/**
 * Realiza una petición PUT
 */
export async function apiPut<T>(
  endpoint: string,
  body: any
): Promise<ApiResponse<T>> {
  const response = await apiCall(endpoint, {
    method: "PUT",
    body: JSON.stringify(body),
  });

  return await parseApiResponse<T>(response);
}

/**
 * Realiza una petición DELETE
 */
export async function apiDelete<T>(endpoint: string): Promise<ApiResponse<T>> {
  const response = await apiCall(endpoint, {
    method: "DELETE",
  });

  return await parseApiResponse<T>(response);
}

/**
 * Parsea la respuesta de la API manejando diferentes formatos de error
 */
async function parseApiResponse<T>(response: Response | null): Promise<ApiResponse<T>> {
  if (!response) {
    return { success: false, error: "Unauthorized", status: 401 };
  }

  try {
    // Intentar parsear como JSON
    const data = await response.json();

    // Si la respuesta es exitosa
    if (response.ok) {
      return {
        success: true,
        data: data as T,
        status: response.status,
      };
    }

    // Si hay error, extraer el mensaje de error
    const errorMessage = data.error || data.message || `Error ${response.status}`;

    return {
      success: false,
      error: errorMessage,
      status: response.status,
    };

  } catch (parseError) {
    // Si no es JSON válido, intentar leer como texto plano
    try {
      const text = await response.text();

      if (response.ok) {
        return {
          success: true,
          data: text as T,
          status: response.status,
        };
      }

      // Para rate limiter y otros errores que retornan texto plano
      return {
        success: false,
        error: text || `Error ${response.status}`,
        status: response.status,
      };

    } catch (textError) {
      // Error al leer la respuesta
      return {
        success: false,
        error: `Error de red: ${response.status}`,
        status: response.status,
      };
    }
  }
}
