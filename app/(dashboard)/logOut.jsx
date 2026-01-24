import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useUser } from "../../hooks/useUser";

const Logout = () => {
  const { logout } = useUser();
  const router = useRouter();

  useEffect(() => {
    logout();               // ✅ clear user
    router.replace("/LogIn"); // ✅ redirect
  }, []);

  return null;
};

export default Logout;
