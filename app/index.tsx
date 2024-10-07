// app/index.tsx
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function LandingPage() {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.heroSection}>
        <Image
          source={require("../assets/images/logo.png")} // Add your logo file here
          style={styles.logo}
          resizeMode="contain"
        />
        <ThemedText style={styles.title}>Welcome to Amp’dUp!</ThemedText>
        <ThemedText style={styles.tagline}>Where your vibe meets the tribe.</ThemedText>
      </View>

      {/* Feature Section */}
      <View style={styles.featureSection}>
        <ThemedText style={styles.subheading}>Why Amp’dUp?</ThemedText>
        <ThemedText style={styles.featureText}>
          ⚡ Show off your style. Flaunt your vibe.
        </ThemedText>
        <ThemedText style={styles.featureText}>
          ⚡ Stay in sync with friends & trends.
        </ThemedText>
        <ThemedText style={styles.featureText}>
          ⚡ Own the feed, be the highlight.
        </ThemedText>
      </View>

      {/* Call to Action Section */}
      <View style={styles.ctaSection}>
        <TouchableOpacity style={styles.button}>
          <Link href="/auth/signup" style={styles.buttonText}>
            Get Amp’dUp
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Link href="/auth/login" style={styles.secondaryButtonText}>
            Already have an account? Log in
          </Link>
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <ThemedText style={styles.footerText}>
          🔥 Amp’dUp is the place to flex your vibe 🔥
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  heroSection: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD700", // Gold-like color for boldness
    textAlign: "center",
  },
  tagline: {
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
  featureSection: {
    marginVertical: 20,
  },
  subheading: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  featureText: {
    fontSize: 16,
    color: "#B0E0E6",
    marginBottom: 5,
    textAlign: "center",
  },
  ctaSection: {
    marginTop: 40,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFD700", // Gold color for the main call-to-action
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  secondaryButton: {
    borderColor: "#FFD700",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  secondaryButtonText: {
    fontSize: 16,
    color: "#FFD700",
  },
  footer: {
    marginTop: 50,
  },
  footerText: {
    fontSize: 16,
    color: "#B0E0E6",
    textAlign: "center",
  },
});
