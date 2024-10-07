// app/records/index.tsx
import { ThemedText } from "@/components/ThemedText";
import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

const recordsData = [
  { id: "1", type: "Expense", date: "2024-10-01 14:30", value: "$200" },
  { id: "2", type: "Income", date: "2024-10-02 09:00", value: "$500" },
  { id: "3", type: "Expense", date: "2024-10-03 17:45", value: "$150" },
  { id: "4", type: "Income", date: "2024-10-04 12:15", value: "$600" },
  { id: "5", type: "Expense", date: "2024-10-05 08:30", value: "$75" },
];

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const date = new Date(dateString);
  return date.toLocaleString("en-US", options);
};

const RecordItem = ({ type, date, value }) => {
  return (
    <View style={styles.recordItem}>
      <ThemedText style={styles.recordType}>{type}</ThemedText>
      <ThemedText style={styles.recordValue}>{value}</ThemedText>
      <ThemedText style={styles.recordDate}>{formatDate(date)}</ThemedText>
    </View>
  );
};

const RecordsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={recordsData}
        renderItem={({ item }) => (
          <RecordItem type={item.type} date={item.date} value={item.value} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#1a1a1a", // Match dark theme
  },
  recordItem: {
    padding: 16,
    backgroundColor: "#333", // Card background
    marginBottom: 8,
    borderRadius: 8,
  },
  recordType: {
    fontSize: 18,
    color: "#fff", // White for text
  },
  recordDate: {
    fontSize: 14,
    color: "#aaa", // Gray for date
  },
  recordValue: {
    fontSize: 16,
    color: "#FFD700", // Yellow for value
  },
});

export default RecordsScreen;
