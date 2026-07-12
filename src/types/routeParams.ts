// Forma de params compartida por las pantallas que se abren desde una
// tribu (itinerario, chat grupal): antes cada una declaraba su propio
// `useLocalSearchParams<{...}>()` con los mismos dos campos por separado.
export type TribeRouteParams = {
  viajeId?: string;
  nombre?: string;
};
