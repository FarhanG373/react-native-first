import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Logo from "../assets/img/logo_demo.jpg";
import { Link } from "expo-router";
import { getData } from "../APIs/getApi";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";

const Home = () => {
  const [count, setCount] = useState(0);
  const [dataGet, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const incre = () => setCount((c) => c + 1);
  const decre = () => setCount((c) => c - 1);

  // ✅ API call MUST be inside useEffect
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const result = await getData(
          "https://dummyjson.com/users",
        );
        setData(result.users);
      } catch (e) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const Item = ({ title, password }) => (
    <ThemedView style={styles.item}>
      <Text style={styles.title}>{title} / {password}</Text>
    </ThemedView>
  );

  if (loading) {
    return (
      <ThemedView style={styles.view}>
        <ActivityIndicator color="#ce1db4" size="large" />
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.view}>
        <Text style={styles.text}>{error}</Text>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.view} safe={true}>
      <Image source={Logo} style={{ width: 100, height: 100 }} />

      <ThemedText title={true} style={[styles.text, styles.heading]}>Hi Mohammad Umar</ThemedText>

      <Link href="/LogIn">Log In</Link>
      <Link href="/SignUp">Sign Up</Link>
      <Link href="/profile">profile</Link>
      <Link href="/books">books</Link>
      <Link href="/create">create</Link>
      <Link href="https://www.youtube.com/watch?v=1lKeZqxywEo&list=PL4cUxeGkcC9hNTz3sxqGTfxAwU-DIHJd2&index=11">
        YouTube Video
      </Link>
      <Button title="Increase" onPress={incre} color="#f194ff" />
      <ThemedText style={styles.text}>{count}</ThemedText>
      <Button title="Decrease" onPress={decre} />

      <FlatList
        style={styles.list}
        data={dataGet}
        renderItem={({ item }) => <Item title={item.username} password={item.password} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {fontSize: 20 },
  button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#ce1db4",
    color: "white",
    fontSize: 20,
  },
  list: { width: "100%", padding: 10 },
  item: { backgroundColor: "#ce1db4", padding: 20, marginVertical: 8 },
  title: { fontSize: 16, color: "white" },
});
