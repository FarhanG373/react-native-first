import { createContext, useState } from "react";

export const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async ({ username, password }) => {
    try {
      setLoading(true);

      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30,
        }),
      });

      const data = await res.json(); // ✅ read once

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      setUser(data); // ✅ store user
      return data;   // ✅ return same object
    } catch (error) {
      console.error("login error:", error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  const register = (userData) => {
    setUser(userData);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
