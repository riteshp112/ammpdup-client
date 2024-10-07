// app/login.tsx
import { ThemedText } from "@/components/ThemedText";
import { Link, useNavigation } from "expo-router";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { navigate } = useNavigation();

  const handleLogin = () => {
    setIsSubmitting(true);

    // Basic validation
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password.");
      setIsSubmitting(false);
      return;
    }

    // TODO: Replace with actual authentication logic
    setTimeout(() => {
      Alert.alert("Success", "Logged in successfully!");
      navigate("home");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <ThemedText style={styles.title}>Welcome back to Amp’dUp</ThemedText>
      <ThemedText style={styles.subtitle}>Log in to your account</ThemedText>

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

      {/* Login Button */}
      <TouchableOpacity
        style={[styles.button, isSubmitting && { opacity: 0.6 }]}
        onPress={handleLogin}
        disabled={isSubmitting}
      >
        <ThemedText style={styles.buttonText}>
          {isSubmitting ? "Logging in..." : "Log in"}
        </ThemedText>
      </TouchableOpacity>

      {/* Forgot Password */}
      <View style={styles.signupContainer}>
        <ThemedText style={styles.forgotPasswordText}>Forgot password?</ThemedText>
        <Link href="/auth/forget-password" style={styles.forgotPasswordLink}>
          Reset Password
        </Link>
      </View>

      {/* Signup Redirect */}
      <View style={styles.signupContainer}>
        <ThemedText style={styles.signupText}>Don’t have an account?</ThemedText>
        <Link href="/auth/signup" style={styles.signupLink}>
          Sign up
        </Link>
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
  forgotPasswordLink: {
    color: "#FFD700",
    fontSize: 16,
    marginLeft: 5,
  },
  forgotPasswordText: {
    color: "#fff",
    fontSize: 16,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#fff",
    fontSize: 16,
  },
  signupLink: {
    color: "#FFD700",
    fontSize: 16,
    marginLeft: 5,
  },
});
