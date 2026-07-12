// Paleta de colores compartida por toda la app. Antes cada pantalla la
// redefinía a mano (mismos valores, copiados 7 veces); ahora viven acá
// una sola vez para que un cambio de color no dependa de tocar cada
// archivo por separado.
//
// `surface` y `subtext` son alias de `card` y `muted` — los usa
// (tabs)/_layout.tsx, que nombraba estas mismas claves distinto.
export const C = {
  bg: "#0F1310",
  card: "#1a1f1b",
  surface: "#1a1f1b",
  border: "#2a322b",
  text: "#e8eee9",
  muted: "#9aa49d",
  subtext: "#9aa49d",
  accent: "#9ec39f",
  delete: "#f06292",
  warning: "#d9534f",
};
