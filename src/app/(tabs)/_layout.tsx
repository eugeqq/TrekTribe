import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return <Tabs screenOptions={{ headerShown: false }}>
    <Tabs.Screen
      name="perfil"
      options={{
        title: 'Perfil',
        tabBarIcon: ({ color }) => <Ionicons name="person-outline" color={color} size={26} />
      }} />
  </Tabs>
}
