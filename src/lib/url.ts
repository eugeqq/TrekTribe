import { API_URL } from "../constants";

export function toImageUrl(img?: string | null) {
  if (!img) return null;
  if (/^https?:\/\//i.test(img)) return img; // ya es absoluta
  const base = API_URL?.replace(/\/+$/, "") || "";
  return `${base}${img.startsWith("/") ? "" : "/"}${img}`; // api + /uploads/xxx.jpg
}