// app/chat/[friendId].tsx
import { ThemedText } from "@/components/ThemedText";
import { useGlobalSearchParams } from "expo-router"; // Make sure to import useSearchParams
import { useState } from "react";
import { FlatList, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

// Sample chat data for different friends
const chatData = {
  "1": [
    { id: "1", message: "Hey, how’s it going?", sender: "friend" },
    { id: "2", message: "Good! How about you?", sender: "me" },
  ],
  "2": [
    { id: "1", message: "Can we meet tomorrow?", sender: "friend" },
    { id: "2", message: "Sure, what time?", sender: "me" },
  ],
  "3": [
    { id: "1", message: "I’ll send you the files.", sender: "friend" },
    { id: "2", message: "Thanks!", sender: "me" },
  ],
};

export default function ChatScreen() {
  const { friendId } = useGlobalSearchParams(); // Accessing friendId using useSearchParams
  const [messages, setMessages] = useState(chatData[friendId] || []);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now().toString(), message: newMessage, sender: "me" }]);
      setNewMessage("");
    }
  };

  const renderMessage = ({ item }: { item: Message }) => {
    return (
      <View
        style={[
          styles.messageContainer,
          item.sender === "me" ? styles.myMessage : styles.friendMessage,
        ]}
      >
        <ThemedText style={styles.messageText}>{item.message}</ThemedText>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.messagesList}
      />

      {/* Message input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor="#aaa"
          value={newMessage}
          onChangeText={setNewMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <ThemedText style={styles.sendButtonText}>Send</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface Message {
  id: string;
  message: string;
  sender: "me" | "friend";
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 10,
  },
  messagesList: {
    paddingBottom: 30,
  },
  messageContainer: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    maxWidth: "80%",
  },
  myMessage: {
    backgroundColor: "#4CAF50",
    alignSelf: "flex-end",
  },
  friendMessage: {
    backgroundColor: "#333",
    alignSelf: "flex-start",
  },
  messageText: {
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#333",
    backgroundColor: "#1a1a1a",
  },
  input: {
    flex: 1,
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#FFD700",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  sendButtonText: {
    color: "#1a1a1a",
    fontWeight: "bold",
  },
});
