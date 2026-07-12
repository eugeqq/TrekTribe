// URL base del backend. Antes se leía `process.env.EXPO_PUBLIC_API_URL`
// directo en cada pantalla (16+ lugares); vive acá para que un cambio de
// variable de entorno no dependa de tocar cada archivo por separado.
export const API_URL = process.env.EXPO_PUBLIC_API_URL;
