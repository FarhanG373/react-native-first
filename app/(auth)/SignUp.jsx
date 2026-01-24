import {
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState, useEffect } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedPresseble from "../../components/ThemedPresseble";
import { Link, useRouter } from "expo-router";
import ThemedInput from "../../components/ThemedInput";
import { useUser } from "../../hooks/useUser";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { register, user, loading } = useUser();
  const router = useRouter();

  const handleRegister = async () => {
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    try {
      setError("");
      await register({
        username: email, // DummyJSON-style
        password,
      });
      // success handled via useEffect
    } catch (e) {
      setError(e.message || "Registration failed");
    }
  };

  // ✅ Redirect after successful register
  useEffect(() => {
    if (user) {
      router.replace("/LogIn"); 
    }
  }, [user]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView style={styles.container}>
        <ThemedText title style={styles.title}>
          Sign Up Screen
        </ThemedText>

        <ThemedInput
          placeHolder="Email / Username"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <ThemedInput
          placeHolder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error ? (
          <ThemedText style={styles.error}>{error}</ThemedText>
        ) : null}

        <ThemedPresseble onPress={handleRegister} disabled={loading}>
          <ThemedText style={{ color: "white" }}>
            {loading ? "Signing up..." : "Sign Up"}
          </ThemedText>
        </ThemedPresseble>

        <Link href="/LogIn">Already have an account? Login</Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
