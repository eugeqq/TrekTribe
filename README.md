# TrekTribe

Una aplicación móvil para gestionar viajes en grupo, organizar tribus de viajeros, compartir itinerarios, gastos y tareas colaborativas. Construida con **Expo** y **React Native** para iOS, Android y web.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Cómo Ejecutar](#cómo-ejecutar)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Autenticación](#autenticación)
- [Navegación](#navegación)


## ✨ Características

- **Autenticación y Registro**: Seguridad con JWT y gestión de sesiones
- **Creación de Tribus**: Crea grupos de viajeros para organizar tus viajes
- **Panel de Tribus**: Visualiza y gestiona todas tus tribus activas
- **Itinerarios Dinámicos**: Planifica y organiza las actividades de tu viaje
- **Gestión de Gastos**: Registra y categoriza gastos compartidos, y saldá deudas entre miembros (Saldar Cuentas)
- **Lista de Tareas**: Colabora con tu grupo en tareas y pendientes
- **Chat grupal por tribu**: todos los miembros de un viaje comparten un chat de texto
- **Chat 1 a 1**: iniciá una conversación privada invitando a alguien por email
- **Perfil de Usuario**: Gestiona tu información personal
- **Perfil de Amigos**: Visualiza perfiles de otros miembros de la tribu
- **Selector de Fechas**: Integración con calendarios nativos (iOS/Android)
- **Subida de Imágenes**: Soporta captura de fotos desde cámara o galería
- **Ubicación en Maps**: cada evento del itinerario abre su ubicación directo en Google Maps

## 🛠️ Tecnologías

### Frontend
- **React Native** (v0.81.4): Framework para desarrollo multiplataforma
- **Expo** (v54.0.10): Plataforma construida sobre React Native
- **Expo Router** (v6.0.8): Sistema de enrutamiento basado en archivos
- **TypeScript** (v5.9.2): Tipado estático para mayor seguridad
- **React Navigation**: Navegación entre pantallas y tabs
- **Async Storage**: Almacenamiento local persistente


### Backend Connection
- **Prisma Client** (v6.16.3): ORM para interacción con base de datos
- **Prisma Accelerate**: Optimización de caché
- **Cloudinary** (v2.8.0): Servicio para almacenamiento de imágenes en la nube


## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **npm** o **yarn**
- **Expo CLI**: `npm install -g expo-cli`
- **Git**: Para control de versiones

Para compilar a dispositivos:
- **iOS**: Xcode (en macOS)
- **Android**: Android Studio y Android SDK

## 📦 Instalación

1. **Clona el repositorio**
   ```bash
   git clone <tu-repositorio>
   cd TrekTribe
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

   O si usas yarn:
   ```bash
   yarn install
   ```

3. **Configura las variables de entorno**
   Crea un archivo `.env.local` en la raíz del proyecto:
   ```env
   EXPO_PUBLIC_API_URL=https://tu-api-backend.com
   EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=tu_cloud_name
   ```

## ⚙️ Configuración

### Variables de Entorno

Las siguientes variables de entorno se utilizan en la aplicación:

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `EXPO_PUBLIC_API_URL` | URL base de la API backend | `https://api.trektribe.com` |
| `EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloud name de Cloudinary | `tu-cloud` |

### Scripts Disponibles

```bash
# Inicia el servidor de desarrollo
npm start

# Compilar para iOS
npm run ios

# Compilar para Android
npm run android

# Compilar para web
npm run web

# Ejecutar linter para validar código
npm run lint

# Resetear el proyecto a estado inicial
npm run reset-project
```

## 🚀 Cómo Ejecutar

### Desarrollo Local

1. **Inicia Expo**
   ```bash
   npm start
   ```
   Esto abrirá el Expo CLI con varias opciones.

2. **Elige tu plataforma:**
   - Presiona `i` para iOS (requiere macOS)
   - Presiona `a` para Android (requiere Android Studio)
   - Presiona `w` para web
   - O escanea el código QR con la app Expo Go

3. **Accede a la aplicación**
   - En simulador/emulador: Se abre automáticamente
   - Con Expo Go: Abre la app y escanea el código QR



## 📁 Estructura del Proyecto

```
TrekTribe/
├── src/
│   ├── app/                         # Rutas y pantallas (Expo Router)
│   │   ├── _layout.tsx              # Layout raíz
│   │   ├── index.tsx                # Pantalla inicial (redirect a login)
│   │   ├── (auth)/                  # Stack de autenticación
│   │   │   ├── _layout.tsx
│   │   │   ├── login.tsx            # Pantalla de login
│   │   │   └── register.tsx         # Pantalla de registro
│   │   ├── (tabs)/                  # Bottom tabs (principal)
│   │   │   ├── _layout.tsx
│   │   │   ├── tribes.tsx           # Lista de tribus del usuario
│   │   │   ├── chats.tsx            # Chats: grupales (por tribu) + 1 a 1
│   │   │   └── perfil.tsx           # Perfil del usuario
│   │   └── (stack)/                 # Stack navigator (detalles)
│   │       ├── _layout.tsx
│   │       ├── createTribe.tsx      # Crear nueva tribu
│   │       ├── singleTribe.tsx      # Detalles de una tribu
│   │       ├── itinerary.tsx        # Itinerario del viaje (con link a Maps)
│   │       ├── expenses.tsx         # Gestión de gastos + Saldar Cuentas
│   │       ├── toDos.tsx            # Lista de tareas
│   │       ├── friendProfile.tsx    # Perfil de otros usuarios
│   │       ├── tribeChat.tsx        # Chat grupal de una tribu
│   │       └── chatConversation.tsx # Conversación de un chat 1 a 1
│   ├── components/                  # Componentes reutilizables
│   │   ├── DateField.tsx            # Selector de fecha
│   │   └── EditableRow.tsx          # Fila editable
│   ├── lib/                         # Utilidades y contextos
│   │   ├── auth.ts                  # Servicio de autenticación
│   │   ├── authContext.tsx          # Context API para estado global
│   │   └── url.ts                   # Configuración de URLs
│   ├── constants.ts                 # Constantes de la app
│   └── theme.ts                     # Configuración de estilos
├── assets/                          # Recursos estáticos
│   └── images/                      # Iconos, splash, etc.
├── package.json                     # Dependencias del proyecto
├── app.json                         # Configuración de Expo
├── tsconfig.json                    # Configuración de TypeScript
├── eslint.config.js                 # Configuración de linter
└── README.md                        # Este archivo
```

## 🔐 Autenticación

### Flujo de Autenticación

La aplicación utiliza un sistema de autenticación basado en **JWT (JSON Web Tokens)**:

1. **Login/Register**: El usuario proporciona sus credenciales
2. **Token Generation**: El backend genera un JWT
3. **Session Storage**: El token se almacena en AsyncStorage
4. **Session Validation**: Se valida periódicamente con el servidor
5. **Logout**: Se elimina el token del almacenamiento


## 🔄 Navegación

La aplicación utiliza **Expo Router** con estructura basada en carpetas:

- **(tabs)**: Tabs inferiores para navegación principal
  - Tribus: Visualiza todas tus tribus
  - Chats: chat grupal de cada tribu + chats 1 a 1 (invitación por email)
  - Perfil: Tu perfil de usuario

- **(stack)**: Stack navigator para flujos detallados
  - Crear tribu: Formulario para crear nuevo viaje
  - Ver tribu individual: Detalles y gestión de tribu (incluye acceso al chat grupal)
  - Itinerario: Actividades planificadas (ubicación con link directo a Google Maps)
  - Gastos: Registro de gastos compartidos + Saldar Cuentas
  - Tareas: Lista de cosas por hacer
  - Perfil de amigos: Ver otros perfiles
  - Chat grupal de tribu: conversación entre todos los miembros de un viaje
  - Conversación 1 a 1: chat privado entre dos usuarios

- **(auth)**: Stack de autenticación
  - Login: Acceso a la aplicación
  - Registro: Crear nueva cuenta

## 📱 Plataformas Soportadas

- ✅ **iOS** (11+)
- ✅ **Android** (8+)
- ✅ **Web** (navegadores modernos)


## 📚 Recursos Útiles

- [Documentación de Expo](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
- [Expo Router Guide](https://docs.expo.dev/router/introduction)
- [Prisma Documentation](https://www.prisma.io/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Cloudinary Docs](https://cloudinary.com/documentation)

## 📋 Convenciones del Proyecto

### Estructura de Carpetas
- Los componentes reutilizables van en `src/components/`
- Las utilidades y servicios van en `src/lib/`
- Las rutas y pantallas van en `src/app/` con sistema de carpetas basado en archivos


**Última actualización**: Febrero 2026
**Versión**: 1.0.0
