import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔐 Login
  const login = async ({ username, password }) => {
    try {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      setUser(data);
      await AsyncStorage.setItem("user", JSON.stringify(data)); // ✅ RN-safe

      return data;
    } catch (error) {
      console.error("Login error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 🚪 Logout
  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("user");
  };

  // ♻️ Restore user on app start
  useEffect(() => {
    const restoreUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (e) {
        console.error("Failed to restore user", e);
      }
    };

    restoreUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
