import React from "react";
import { Pressable, Text, View, StyleSheet, PressableProps } from "react-native";
import { C } from "../theme";

type Props = {
  label: string;
  value?: string;
} & Pick<PressableProps, "onPress" | "disabled" | "onLongPress">;

export default function EditableRow({ label, value, onPress, disabled, onLongPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.row, disabled && { opacity: 0.5 }]}
      accessibilityRole="button"
      accessibilityLabel={`Editar ${label}`}
      testID={`editable-row-${label}`}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowValue}>{value || "Completar"}</Text>
      </View>
      <Text style={styles.rowEdit}>Editar</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  row: {
    width: "100%",
    backgroundColor: C.card,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  rowLabel: { color: C.muted, fontSize: 12, marginBottom: 4 },
  rowValue: { color: C.text, fontSize: 16, fontWeight: "600" },
  rowEdit: { color: C.accent, fontSize: 14, fontWeight: "700" },
});
