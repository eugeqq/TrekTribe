import { authService } from "./auth";

// Wrapper de fetch que agrega el header Authorization con el JWT de la
// sesión actual, si hay una. Se usa en reemplazo de fetch() en las
// llamadas al backend para que el requireAuth del servidor pueda
// verificar quién hace el pedido, en vez de confiar en ids que vengan
// en la URL o el body.
export async function authFetch(input: string, init: RequestInit = {}): Promise<Response> {
  const token = await authService.getToken();

  const headers: HeadersInit = {
    ...(init.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  return fetch(input, { ...init, headers });
}
