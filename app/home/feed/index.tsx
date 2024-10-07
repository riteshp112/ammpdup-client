// app/feed.tsx
import { ThemedText } from "@/components/ThemedText";
import { Video } from "expo-av"; // Import Video from expo-av
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  View
} from "react-native";

// Sample data for posts
const posts = [
  {
    id: "1",
    text: "Enjoying a sunny day at the beach!",
    type: "image",
    file: "https://example.com/image1.jpg", // Replace with actual image URL
  },
  {
    id: "2",
    text: "Check out this amazing sunset.",
    type: "image",
    file: "https://example.com/image2.jpg", // Replace with actual image URL
  },
  {
    id: "3",
    text: "Watch this cool skateboard trick!",
    type: "video",
    file: "https://example.com/video1.mp4", // Replace with actual video URL
  },
];

export default function FeedPage() {
  const renderPost = ({ item }: { item: Post }) => {
    return (
      <View style={styles.postContainer}>
        {/* Text content of the post */}
        <ThemedText style={styles.postText}>{item.text}</ThemedText>

        {/* Conditional rendering for file type */}
        {item.type === "image" ? (
          <Image source={{ uri: item.file }} style={styles.postImage} />
        ) : (
          <Video
            source={{ uri: item.file }}
            style={styles.postVideo}
            resizeMode="contain"
            useNativeControls
            isLooping
          />
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={styles.feed}
      />
    </View>
  );
}

interface Post {
  id: string;
  text: string;
  type: "image" | "video";
  file: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 10,
  },
  feed: {
    paddingBottom: 30,
  },
  postContainer: {
    backgroundColor: "#333",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },
  postText: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
  },
  postImage: {
    width: "100%",
    height: Dimensions.get("window").width * 0.6, // Aspect ratio for image
    borderRadius: 10,
  },
  postVideo: {
    width: "100%",
    height: Dimensions.get("window").width * 0.6, // Aspect ratio for video
    borderRadius: 10,
  },
});
