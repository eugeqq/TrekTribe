// Parsea el body de una Response como JSON sin explotar si viene vacío o
// no es JSON válido (por ejemplo, una respuesta 204 o un error de texto
// plano). Antes estaba definido igual, por separado, en toDos.tsx e
// itinerary.tsx.
export async function safeJson(res: Response): Promise<any> {
  const text = await res.text();
  try {
    return text ? JSON.parse(text) : {};
  } catch {
    return {};
  }
}
