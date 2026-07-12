import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Modal, Platform, Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { C } from "../theme";

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

const WEEKDAYS = ["L", "M", "M", "J", "V", "S", "D"];
const MONTH_NAMES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

// Arma la grilla de un mes (semanas empezando en lunes), rellenando con
// null los huecos antes del día 1 y después del último día.
const buildMonthGrid = (year: number, month: number): (Date | null)[] => {
  const firstOfMonth = new Date(year, month, 1);
  const firstWeekday = (firstOfMonth.getDay() + 6) % 7; // 0 = lunes
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = new Array(firstWeekday).fill(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(year, month, d));
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
};

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();

// Mini calendario propio para web: @react-native-community/datetimepicker
// no tiene implementación para esa plataforma (renderiza null), y el
// <input type="date"> del navegador abre un popup nativo que varía entre
// navegadores. Esto da el mismo look en cualquier navegador y permite
// navegar entre meses.
function MiniCalendar({ selected, onSelect }: { selected: Date; onSelect: (d: Date) => void }) {
  const [viewYear, setViewYear] = useState(selected.getFullYear());
  const [viewMonth, setViewMonth] = useState(selected.getMonth());

  const goPrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };
  const goNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  const cells = buildMonthGrid(viewYear, viewMonth);

  return (
    <View style={calStyles.wrap}>
      <View style={calStyles.header}>
        <Pressable onPress={goPrevMonth} hitSlop={8} style={calStyles.navBtn}>
          <Feather name="chevron-left" size={20} color="#111" />
        </Pressable>
        <Text style={calStyles.headerText}>
          {MONTH_NAMES[viewMonth]} {viewYear}
        </Text>
        <Pressable onPress={goNextMonth} hitSlop={8} style={calStyles.navBtn}>
          <Feather name="chevron-right" size={20} color="#111" />
        </Pressable>
      </View>

      <View style={calStyles.row}>
        {WEEKDAYS.map((w, i) => (
          <Text key={i} style={calStyles.weekdayText}>
            {w}
          </Text>
        ))}
      </View>

      <View style={[calStyles.row, { flexWrap: "wrap" }]}>
        {cells.map((cell, i) => {
          const active = !!cell && isSameDay(cell, selected);
          return (
            <Pressable
              key={i}
              disabled={!cell}
              onPress={() => cell && onSelect(cell)}
              style={[calStyles.dayCell, active && calStyles.dayCellActive]}
            >
              {cell && (
                <Text style={[calStyles.dayText, active && calStyles.dayTextActive]}>{cell.getDate()}</Text>
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const calStyles = StyleSheet.create({
  wrap: { width: 280 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  navBtn: { padding: 4 },
  headerText: { fontSize: 15, fontWeight: "700", color: "#111", textTransform: "capitalize" },
  row: { flexDirection: "row" },
  weekdayText: {
    width: 40,
    textAlign: "center",
    color: "#667066",
    fontSize: 12,
    fontWeight: "700",
  },
  dayCell: {
    width: 40,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  dayCellActive: { backgroundColor: C.primary },
  dayText: { color: "#111", fontSize: 14 },
  dayTextActive: { color: "#fff", fontWeight: "700" },
});

export default function DateField({
  value,
  placeholder,
  onChange,
  style,
  placeholderColor = C.muted,
  textColor = C.text,
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

      {showPicker && (Platform.OS === "ios" || Platform.OS === "web") ? (
        <Modal transparent animationType="fade" visible={showPicker} onRequestClose={() => setShowPicker(false)}>
          <View style={styles.modalOverlay}>
            <Pressable style={StyleSheet.absoluteFill} onPress={() => setShowPicker(false)} />
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Seleccione la fecha</Text>
              {Platform.OS === "web" ? (
                <MiniCalendar selected={tempDate} onSelect={setTempDate} />
              ) : (
                <DateTimePicker
                  value={tempDate}
                  mode="date"
                  display="spinner"
                  onChange={(event: any, selectedDate?: Date) => {
                    if (selectedDate) setTempDate(selectedDate);
                  }}
                />
              )}
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
          </View>
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
    backgroundColor: C.card,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: C.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    flex: 1,
  },
  rowLabel: { color: C.muted, fontSize: 12, marginBottom: 4 },
  rowEdit: { color: C.accent, fontSize: 14, fontWeight: "700" },
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
  modalBtnPrimary: { backgroundColor: C.primary, paddingVertical: 10, paddingHorizontal: 14, borderRadius: 8 },
  modalBtnPrimaryText: { color: "#fff", fontWeight: "700" },
});
