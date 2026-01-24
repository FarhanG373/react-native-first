export const loginAuth = async ({ username, password }) => {
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Login failed");
    }

    return await res.json();
  } catch (error) {
    console.error("loginAuth error:", error);
    throw error;
  }
};
