// app/friends.tsx
import { ThemedText } from "@/components/ThemedText";
import { useRouter } from "expo-router";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";

// Sample friends list data
const friends = [
  {
    id: "1",
    name: "John Doe",
    avatar: "https://example.com/avatar1.jpg", // Replace with actual image URL
    lastMessage: "Hey, how’s it going?",
  },
  {
    id: "2",
    name: "Jane Smith",
    avatar: "https://example.com/avatar2.jpg", // Replace with actual image URL
    lastMessage: "Can we meet tomorrow?",
  },
  {
    id: "3",
    name: "Alice Johnson",
    avatar: "https://example.com/avatar3.jpg", // Replace with actual image URL
    lastMessage: "I’ll send you the files.",
  },
];

export default function FriendsList() {
  const router = useRouter();

  const handleChatOpen = (friendId: string) => {
    router.push(`/messages/${friendId}`);
  };

  const renderFriend = ({ item }: { item: Friend }) => {
    return (
      <TouchableOpacity style={styles.friendContainer} onPress={() => handleChatOpen(item.id)}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.friendDetails}>
          <ThemedText style={styles.friendName}>{item.name}</ThemedText>
          <ThemedText style={styles.lastMessage}>{item.lastMessage}</ThemedText>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={renderFriend}
        contentContainerStyle={styles.friendsList}
      />
    </View>
  );
}

interface Friend {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
  },
  friendsList: {
    paddingBottom: 30,
  },
  friendContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#333",
    borderRadius: 10,
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  friendDetails: {
    flex: 1,
  },
  friendName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  lastMessage: {
    fontSize: 14,
    color: "#bbb",
  },
});
