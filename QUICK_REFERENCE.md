# 📋 QUICK REFERENCE: Cambios Exactos Por Archivo

## 1. `src/app/(auth)/login.tsx`

```diff
  import { useRouter } from "expo-router";
  import React, { useState } from "react";
  import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { authService } from "../../lib/auth";
  import { useAuth } from "../../lib/authContext";
+ import { apiPost, ApiResponse } from "../../lib/api";

+ interface LoginResponse {
+   id: number;
+   email: string;
+   nombre: string;
+   apellido: string;
+   token: string;
+ }

  export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
+   const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { refresh } = useAuth();

    const onLogin = async () => {
      setErrorMessage("");
+     setLoading(true);

      if (!email || !password) {
        setErrorMessage("Por favor, completa todos los campos");
+       setLoading(false);
        return;
      }

      try {
-       const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
-         method: "POST",
-         headers: { "Content-Type": "application/json" },
-         body: JSON.stringify({ email, password }),
-       });
+       const response: ApiResponse<LoginResponse> = await apiPost<LoginResponse>(
+         "/login",
+         { email, password }
+       );

-       const data = await response.json();
-
-       if (!response.ok) {
+       if (!response.success) {
-         setErrorMessage("Email o contraseña incorrectos");
+         setErrorMessage(response.error || "Email o contraseña incorrectos");
+         setLoading(false);
          return;
        }

+       const data = response.data!;
```

---

## 2. `src/app/(auth)/register.tsx`

```diff
  import { useRouter } from "expo-router";
  import React, { useState } from "react";
  import { ... } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { authService } from "../../lib/auth";
  import { useAuth } from "../../lib/authContext";
+ import { apiPost, ApiResponse } from "../../lib/api";

+ interface RegisterResponse {
+   id: number;
+   email: string;
+   nombre: string;
+   apellido: string;
+   token: string;
+ }

  const onRegister = async () => {
    setErrorMessage("");

    if (!email || !password || !nombre || !apellido) {
      setErrorMessage("Por favor, completa todos los campos");
      return;
    }

    try {
-     const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/register`, {
-       method: "POST",
-       headers: { "Content-Type": "application/json" },
-       body: JSON.stringify({ email, password, nombre, apellido }),
-     });
+     const response: ApiResponse<RegisterResponse> = await apiPost<RegisterResponse>(
+       "/register",
+       { email, password, nombre, apellido }
+     );

-     const data = await response.json();
-
-     if (!response.ok) {
+     if (!response.success) {
-       setErrorMessage("Error al registrarse");
+       setErrorMessage(response.error || "Error al registrarse");
        return;
      }

+     const data = response.data!;
```

---

## 3. `src/app/(tabs)/tribes.tsx`

```diff
  import { useEffect, useState } from "react";
- import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";
+ import { ActivityIndicator, FlatList, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";
  import { useFocusEffect } from "@react-navigation/native";
  import AsyncStorage from "@react-native-async-storage/async-storage";
+ import { apiGet, ApiResponse } from "../../lib/api";
+ import { useAuth } from "../../lib/authContext";

+ interface Tribe {
+   id: string;
+   nombre: string;
+   destino: string;
+ }

  export default function TribesScreen({}) {
    const [tribes, setTribes] = useState([]);
    const [loading, setLoading] = useState(false);
+   const { isSignedIn, isLoading: authLoading } = useAuth();

    useFocusEffect(
      useCallback(() => {
-       loadTribes();
+       if (isSignedIn && !authLoading) {
+         loadTribes();
+       }
-     }, [])
+     }, [isSignedIn, authLoading])
    );

    const loadTribes = async () => {
      try {
        setLoading(true);
-       const userId = await AsyncStorage.getItem("userId");
-       const res = await fetch(
-         `${process.env.EXPO_PUBLIC_API_URL}/viajes/usuario/${userId}`
-       );
-       const data = await res.json();
-       if (res.ok) {
+       const userId = await AsyncStorage.getItem("userId");
+       const response: ApiResponse<Tribe[]> = await apiGet<Tribe[]>(
+         `/viajes/usuario/${userId}`
+       );
+       if (response.success && response.data) {
-         setTribes(data);
+         setTribes(response.data);
        } else {
-         console.error("Error:", data);
+         console.error("Error:", response.error);
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
```

---

## 4. `src/app/(tabs)/perfil.tsx`

```diff
  import { useEffect, useState } from "react";
  import AsyncStorage from "@react-native-async-storage/async-storage";
+ import { apiGet, apiPut, apiDelete, ApiResponse } from "../../lib/api";
+ import { useAuth } from "../../lib/authContext";

+ interface User {
+   id: string;
+   nombre: string;
+   apellido: string;
+   email: string;
+ }

  const loadProfile = async () => {
    try {
      setLoading(true);
      const userId = await AsyncStorage.getItem("userId");
-     const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/user/${userId}`, {
-       method: "GET",
-       headers: { "Content-Type": "application/json" },
-     });
-     const data = await res.json();
-     if (res.ok) {
+     const response: ApiResponse<User> = await apiGet<User>(`/user/${userId}`);
+     if (response.success && response.data) {
-       setUser(data);
+       setUser(response.data);
      } else {
-       console.error("Error:", data);
+       console.error("Error:", response.error);
      }
    } finally {
      setLoading(false);
    }
  };

  const onUpdateProfile = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
-     const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/user/${userId}`, {
-       method: "PUT",
-       headers: { "Content-Type": "application/json" },
-       body: JSON.stringify({ nombre, apellido }),
-     });
-     const data = await res.json();
-     if (res.ok) {
+     const response: ApiResponse<User> = await apiPut<User>(`/user/${userId}`, {
+       nombre,
+       apellido,
+     });
+     if (response.success && response.data) {
-       setUser(data);
+       setUser(response.data);
        setEditMode(false);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onDeleteAccount = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
-     const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/user/${userId}`, {
-       method: "DELETE",
-     });
-     if (res.ok) {
+     const response = await apiDelete(`/user/${userId}`);
+     if (response.success) {
        await logout();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
```

---

## 5. `src/app/(stack)/createTribe.tsx`

```diff
  import { useRouter } from "expo-router";
  import { useState } from "react";
+ import { apiPost, ApiResponse } from "../../lib/api";

+ interface TribeCreateResponse {
+   id: string;
+   nombre: string;
+   destino: string;
+ }

  const onCreateTribe = async () => {
    setErrorMessage("");

    if (!nombre || !destino) {
      setErrorMessage("Por favor, completa todos los campos");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/tribes`, {
-       method: "POST",
-       headers: { "Content-Type": "application/json" },
-       body: JSON.stringify({
+     const response: ApiResponse<TribeCreateResponse> = await apiPost<TribeCreateResponse>(
+       "/tribes",
+       {
          nombre,
          destino,
          descripcion,
-       }),
+       }
-     });
-     const data = await response.json();
+     );

-     if (!response.ok) {
+     if (!response.success) {
-       setErrorMessage("Error creando tribu");
+       setErrorMessage(response.error || "Error creando tribu");
        return;
      }

+     const tribeData = response.data!;
+
      // Agregar miembros si hay
      if (miembros.length > 0) {
-       const memberRes = await fetch(
-         `${process.env.EXPO_PUBLIC_API_URL}/viajes/${data.id}/miembros`,
-         {
-           method: "POST",
-           headers: { "Content-Type": "application/json" },
-           body: JSON.stringify({ miembros }),
-         }
-       );
+       const memberRes = await apiPost(
+         `/viajes/${tribeData.id}/miembros`,
+         { miembros }
+       );

-       if (!memberRes.ok) {
+       if (!memberRes.success) {
-         console.error("Error agregando miembros");
+         console.error("Error agregando miembros:", memberRes.error);
        }
      }

      router.back();
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Error inesperado");
    } finally {
      setLoading(false);
    }
  };
```

---

## 6. `src/app/(stack)/singleTribe.tsx`

```diff
  import { useEffect, useState } from "react";
+ import { apiGet, ApiResponse } from "../../lib/api";

+ interface TribeDetail {
+   id: string;
+   nombre: string;
+   destino: string;
+   descripcion: string;
+   miembros: any[];
+ }

  useEffect(() => {
    if (idParam) {
      loadTribDetails();
    }
  }, [idParam]);

  const loadTribDetails = async () => {
    try {
      setLoading(true);
-     const res = await fetch(
-       `${process.env.EXPO_PUBLIC_API_URL}/viajes/detalle/${idParam}`
-     );
-     const data = await res.json();
-     if (res.ok) {
+     const response: ApiResponse<TribeDetail> = await apiGet<TribeDetail>(
+       `/viajes/detalle/${idParam}`
+     );
+     if (response.success && response.data) {
-       setTribe(data);
+       setTribe(response.data);
      } else {
-       console.error("Error:", data);
+       console.error("Error:", response.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
```

---

## 7. `src/app/(stack)/friendProfile.tsx`

```diff
  import { useEffect, useState } from "react";
+ import { apiGet, ApiResponse } from "../../lib/api";

+ interface FriendData {
+   id: string;
+   nombre: string;
+   apellido: string;
+   email: string;
+ }

  useEffect(() => {
    if (friendId) {
      loadFriendProfile();
    }
  }, [friendId]);

  const loadFriendProfile = async () => {
    try {
      setLoading(true);
-     const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/user/${friendId}`);
-     const data = await res.json();
-     if (res.ok) {
+     const response: ApiResponse<FriendData> = await apiGet<FriendData>(
+       `/user/${friendId}`
+     );
+     if (response.success && response.data) {
-       setFriend(data);
+       setFriend(response.data);
      } else {
-       console.error("Error:", data);
+       console.error("Error:", response.error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };
```

---

## Resumen de Cambios

| Archivo | Cambios Clave |
|---------|--------------|
| login.tsx | fetch → apiPost, agregar interfaces |
| register.tsx | fetch → apiPost, agregar interfaces |
| tribes.tsx | fetch → apiGet, usar useAuth() |
| perfil.tsx | fetch → apiGet/Put/Delete, agregar interfaces |
| createTribe.tsx | fetch → apiPost (2 llamadas) |
| singleTribe.tsx | fetch → apiGet |
| friendProfile.tsx | fetch → apiGet |

---

## ✅ Verificar Después de cambios

```bash
# 1. Compilar sin errores
npm run build  # o yarn build

# 2. Verificar imports
grep -r "from.*api.ts" src/

# 3. Buscar fetch() restantes
grep -r "fetch\(" src/ | grep EXPO_PUBLIC_API_URL
```

Debería haber 0 matches del fetch() con la API después de hacer todos los cambios.
