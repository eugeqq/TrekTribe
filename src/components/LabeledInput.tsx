import React from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";
import { C } from "../theme";

type Props = {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  multiline?: boolean;
  keyboardType?: "default" | "numeric";
};

// Antes estaba definido casi igual, por separado, en toDos.tsx e itinerary.tsx.
export default function LabeledInput({ label, value, onChangeText, placeholder, multiline, keyboardType }: Props) {
  return (
    <View style={{ gap: 6 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#6b746e"
        keyboardType={keyboardType}
        style={[styles.input, multiline && { height: 90, textAlignVertical: "top" }]}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { fontSize: 13, color: C.text, fontWeight: "700" },
  input: {
    borderWidth: 1,
    borderColor: C.border,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: Platform.select({ ios: 10, android: 8 }),
    fontSize: 14,
    backgroundColor: "#0f1511",
    color: C.text,
  },
});
