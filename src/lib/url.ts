export function toImageUrl(img?: string | null) {
    if (!img) return null;
    if (/^https?:\/\//i.test(img)) return img; // ya es absoluta
    const base = process.env.EXPO_PUBLIC_API_URL?.replace(/\/+$/, "") || "";
    return `${base}${img.startsWith("/") ? "" : "/"}${img}`; // api + /uploads/xxx.jpg
  }