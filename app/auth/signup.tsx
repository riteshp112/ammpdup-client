// app/signup.tsx
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignup = () => {
    setIsSubmitting(true);

    // Basic validation
    if (!username || !email || !password) {
      Alert.alert("Error", "Please fill out all fields.");
      setIsSubmitting(false);
      return;
    }

    // TODO: Replace with actual signup logic
    setTimeout(() => {
      Alert.alert("Success", "Account created successfully!");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <ThemedText style={styles.title}>Join Amp’dUp</ThemedText>
      <ThemedText style={styles.subtitle}>Create a new account</ThemedText>

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Signup Button */}
      <TouchableOpacity
        style={[styles.button, isSubmitting && { opacity: 0.6 }]}
        onPress={handleSignup}
        disabled={isSubmitting}
      >
        <ThemedText style={styles.buttonText}>
          {isSubmitting ? "Signing up..." : "Sign up"}
        </ThemedText>
      </TouchableOpacity>

      {/* Login Redirect */}
      <View style={styles.loginContainer}>
        <ThemedText style={styles.loginText}>Already have an account?</ThemedText>
        <Link href="/auth/login" style={styles.loginLink}>Log in</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#B0E0E6",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#333",
    borderRadius: 10,
    color: "#fff",
  },
  button: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  loginContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
  },
  loginLink: {
    color: "#FFD700",
    fontSize: 16,
    marginLeft: 5,
  },
});
