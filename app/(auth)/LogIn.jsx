import { StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useState, useEffect } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import ThemedPresseble from "../../components/ThemedPresseble";
import { Link } from "expo-router";
import { Colors } from "../../constance/colors";
import ThemedInput from "../../components/ThemedInput";
import { useUser } from "../../hooks/useUser";
import { useRouter } from "expo-router";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, login, loading: userLoading } = useUser();
  const router = useRouter();
  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const userData = await login({
        username: email,
        password,
      });

      // ✅ SUCCESS if we reach here
      alert("Login Successful");
      console.log("Logged-in user:", userData);

      // TODO: navigate to home/dashboard
    } catch (e) {
      setErrorMessage(e.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (user) {
      console.log("User is now logged in:", user);
      router.replace("/profile");
    }
  }, [user]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ThemedView style={styles.container}>
        <ThemedText title style={styles.title}>
          Log In Screen
        </ThemedText>

        <ThemedInput
          placeHolder="Email / Username(emilys)"
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

        {errorMessage ? (
          <ThemedText style={styles.error}>{errorMessage}</ThemedText>
        ) : null}

        <ThemedPresseble onPress={handleLogin} disabled={loading}>
          <ThemedText style={{ color: "white" }}>
            {loading ? "Logging in..." : "Log In"}
          </ThemedText>
        </ThemedPresseble>

        <Link href="/SignUp">Register</Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default LogIn;
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  pressed: { opacity: 0.7 },
  error: { color: "red", marginTop: 10 },
});
