import { Stack } from "expo-router";
import { AuthProvider } from "../lib/authContext";

export default function RootLayout() {
    return (
        <AuthProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(stack)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            </Stack>
        </AuthProvider>
    );
}