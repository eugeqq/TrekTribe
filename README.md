# TrekTribe

App móvil para organizar viajes en grupo: tribus de viajeros, itinerarios, gastos compartidos, tareas y chat. Hecha con **Expo** y **React Native** (iOS, Android y web).

Este es el repositorio del **frontend**. Necesita el [backend de TrekTribe](../TrekTribe-Backend) corriendo para funcionar.

## Índice

- [Cómo levantar el proyecto](#cómo-levantar-el-proyecto)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Autenticación](#autenticación)
- [Navegación](#navegación)

## Cómo levantar el proyecto

Necesitás **Node.js 18+**, **npm**, y el [backend](../TrekTribe-Backend) corriendo (por defecto en `http://localhost:3000`).

1. **Instalar dependencias**
   ```bash
   npm install
   ```

2. **Crear el archivo `.env`** en la raíz del proyecto:
   ```env
   EXPO_PUBLIC_API_URL=http://localhost:3000
   EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
   ```
   - `EXPO_PUBLIC_API_URL`: la URL del backend. Si vas a probar en un celular físico (no un simulador), usá la IP de tu red local en vez de `localhost` (por ejemplo `http://192.168.1.5:3000`).
   - `EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME`: solo hace falta si el backend ya tiene Cloudinary configurado; se usa para armar URLs de imágenes.

3. **Iniciar la app**
   ```bash
   npm start
   ```
   Esto abre el Expo CLI. Desde ahí elegís la plataforma:
   - `i` → iOS (requiere macOS + Xcode)
   - `a` → Android (requiere Android Studio)
   - `w` → Web
   - O escaneá el código QR con la app **Expo Go** en tu celular

Con eso ya deberías tener la app funcionando y conectada al backend.

### Otros comandos útiles

```bash
npm run ios       # compilar directo para iOS
npm run android   # compilar directo para Android
npm run web       # correr solo la versión web
npm run lint      # correr el linter
```

## Características

- **Autenticación**: login y registro con JWT
- **Tribus**: creá grupos de viaje, agregá o sacá miembros
- **Itinerarios**: planificá actividades, con link directo a Google Maps
- **Gastos**: registrá y dividí gastos compartidos, saldá deudas entre miembros
- **Tareas**: lista de pendientes colaborativa por tribu
- **Chat grupal**: todos los miembros de una tribu comparten un chat
- **Chat 1 a 1**: iniciá una conversación privada invitando a alguien por email
- **Perfil**: editá tu información y la foto de perfil
- **Fotos**: subida de imágenes desde cámara o galería (vía Cloudinary)

## Tecnologías

| | |
|---|---|
| **React Native** + **Expo** | Framework multiplataforma (iOS / Android / web) |
| **Expo Router** | Navegación basada en archivos |
| **TypeScript** | Tipado estático |
| **AsyncStorage** | Persistencia local de la sesión |

## Estructura del proyecto

```
src/
├── app/                      # Pantallas y rutas (Expo Router)
│   ├── index.tsx             # Redirect inicial
│   ├── (auth)/                # Login y registro
│   ├── (tabs)/                 # Tribus, Chats, Perfil (tabs inferiores)
│   └── (stack)/                # Pantallas de detalle: crear/ver tribu,
│                                # itinerario, gastos, tareas, chats, perfil de amigo
├── components/                # Componentes reutilizables (DateField, LabeledInput, EditableRow)
├── lib/                       # authFetch (fetch con JWT), auth/authContext (sesión), safeJson, url
├── types/                     # Tipos compartidos (ej. params de rutas)
├── constants.ts               # API_URL
└── theme.ts                   # Paleta de colores compartida (import { C } from "../theme")
```

## Autenticación

1. Login/registro → el backend devuelve un JWT.
2. El token se guarda en `AsyncStorage` junto con una fecha de expiración local (7 días, igual que el token).
3. Todas las llamadas al backend pasan por `authFetch` (`src/lib/authFetch.ts`), que agrega el header `Authorization: Bearer <token>` automáticamente.
4. Al abrir la app se valida la sesión contra el servidor; si el token es inválido o expiró, se cierra sesión.
5. Logout: se avisa al backend para revocar el token, y recién después se limpia el almacenamiento local.

## Navegación

- **(tabs)** — navegación principal: Tribus, Chats, Perfil.
- **(stack)** — pantallas de detalle a las que se llega desde las tabs: crear/ver tribu, itinerario, gastos, tareas, chat grupal, chat 1 a 1, perfil de otro usuario.
- **(auth)** — login y registro, fuera de la navegación principal.
