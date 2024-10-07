// app/ForgotPassword.tsx
import alert from "@/components/alert";
import { ThemedText } from "@/components/ThemedText";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

const ForgotPassword = () => {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");

  const { navigate } = useNavigation();

  const handleSendOtp = () => {
    // Simulate sending OTP
    const randomOtp = "123456";
    // Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(randomOtp);
    setIsOtpSent(true);
    alert("OTP Sent");
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      alert("OTP Verified", "Please set your new password.");
      setIsVerified(true);
    } else {
      alert("Error", "Invalid OTP. Please try again.");
    }
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Error", "Passwords do not match. Please try again.");
      return;
    }
    // Here you can add logic to save the new password
    alert("Success", "Your password has been reset. You can now log in.");
    // Navigate to the login screen (you may want to use react-navigation)
    // Example: navigation.navigate('Login');
    navigate("auth/login");
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>Forgot Password</ThemedText>
      {!isOtpSent ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Email or Username"
            value={emailOrUsername}
            onChangeText={setEmailOrUsername}
          />
          <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
            <ThemedText style={styles.buttonText}>Send OTP</ThemedText>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.container}>
          {isVerified ? (
            <>
              <TextInput
                style={styles.input}
                placeholder="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.button}
                onPress={handleResetPassword}
              >
                <ThemedText style={styles.buttonText}>Reset Password</ThemedText>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                style={styles.input}
                placeholder="Enter OTP"
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
              />
              <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
                <ThemedText style={styles.buttonText}>Verify OTP</ThemedText>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "#1a1a1a", // Dark theme background
  },
  title: {
    fontSize: 24,
    color: "#FFD700", // Yellow for title
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc", // Light gray for border
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#333", // Darker input background
    color: "#fff", // White text for input
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
});

export default ForgotPassword;
