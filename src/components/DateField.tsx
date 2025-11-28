import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Modal, Platform, Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";

type Props = {
  value?: string;
  placeholder: string;
  onChange: (formatted: string) => void;
  style?: ViewStyle | any;
  placeholderColor?: string;
  textColor?: string;
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  showEditLabel?: boolean;
};

const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
const formatDate = (d: Date) => `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()}`;
const parseDateString = (s?: string): Date | null => {
  if (!s) return null;
  const m = s.trim().match(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/);
  if (!m) return null;
  const dd = Number(m[1]);
  const mm = Number(m[2]);
  const yyyy = Number(m[3]);
  const d = new Date(yyyy, mm - 1, dd);
  if (d.getFullYear() !== yyyy || d.getMonth() !== mm - 1 || d.getDate() !== dd) return null;
  return d;
};

export default function DateField({
  value,
  placeholder,
  onChange,
  style,
  placeholderColor = "#9aa49d",
  textColor = "#e8eee9",
  iconName = "calendar",
  iconColor,
  iconSize = 18,
  showEditLabel = false,
}: Props) {
  const [showPicker, setShowPicker] = useState(false);
  const [tempDate, setTempDate] = useState<Date>(parseDateString(value) || new Date());

  const resolvedIconColor = iconColor || (value ? textColor : placeholderColor);

  const open = () => {
    setTempDate(parseDateString(value) || new Date());
    setShowPicker(true);
  };

  return (
    <>
      <Pressable style={[styles.container, style]} onPress={open}>
        {showEditLabel ? (
          <>
            <View style={{ flex: 1 }}>
              <Text style={styles.rowLabel}>{placeholder}</Text>
              <Text style={[styles.text, { color: value ? textColor : placeholderColor }]}>
                {value || "Completar"}
              </Text>
            </View>
            <Text style={styles.rowEdit}>Editar</Text>
          </>
        ) : (
          <>
            <Text style={[styles.text, { color: value ? textColor : placeholderColor }]}>
              {value || placeholder}
            </Text>
            <Feather name={iconName as any} size={iconSize} color={resolvedIconColor} />
          </>
        )}
      </Pressable>

      {showPicker && Platform.OS === "ios" ? (
        <Modal transparent animationType="fade" visible={showPicker} onRequestClose={() => setShowPicker(false)}>
          <Pressable style={styles.modalOverlay} onPress={() => setShowPicker(false)}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Seleccione la fecha</Text>
              <DateTimePicker
                value={tempDate}
                mode="date"
                display="spinner"
                onChange={(event: any, selectedDate?: Date) => {
                  if (selectedDate) setTempDate(selectedDate);
                }}
              />
              <View style={styles.modalButtons}>
                <Pressable style={styles.modalBtn} onPress={() => setShowPicker(false)}>
                  <Text style={styles.modalBtnText}>Cancelar</Text>
                </Pressable>
                <Pressable
                  style={styles.modalBtnPrimary}
                  onPress={() => {
                    onChange(formatDate(tempDate));
                    setShowPicker(false);
                  }}
                >
                  <Text style={styles.modalBtnPrimaryText}>Aceptar</Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        </Modal>
      ) : showPicker ? (
        <DateTimePicker
          value={tempDate}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event: any, selectedDate?: Date) => {
            setShowPicker(false);
            if (!selectedDate) return;
            onChange(formatDate(selectedDate));
          }}
        />
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1a1f1b",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#2a322b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  rowLabel: { color: "#9aa49d", fontSize: 12, marginBottom: 4 },
  rowEdit: { color: "#9ec39f", fontSize: 14, fontWeight: "700" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    maxWidth: 520,
    backgroundColor: "#eef7ee",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  modalTitle: { fontSize: 16, fontWeight: "700", marginBottom: 8, color: "#111" },
  modalButtons: { flexDirection: "row", marginTop: 12, alignSelf: "flex-end" },
  modalBtn: { paddingVertical: 10, paddingHorizontal: 14, marginRight: 8 },
  modalBtnText: { color: "#333", fontWeight: "600" },
  modalBtnPrimary: { backgroundColor: "#4B5320", paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8 },
  modalBtnPrimaryText: { color: "#fff", fontWeight: "700" },
});
