import { useContext } from "react";
import { login,register,logout,getMe,} from "../services/auth.api";
import { Authcontext } from "../auth.context";

export const useAuth = () => {
  const {
    user,
    setUser,
    loading,
    setLoading,
  } = useContext(Authcontext);

  const handleLogin = async (username,password) => {
    try {
      setLoading(true);

      const data = await login(
        username,
        password
      );

      setUser(data.user);

      return data;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (username,email, password) => {
    try {
      setLoading(true);

      const data = await register(
        username,
        email,
        password
      );

      setUser(data.user);

      return data;
    } finally {
      setLoading(false);
    }
  };

  const getCurrentUser = async () => {
    try {
      setLoading(true);

      const data = await getMe();

      setUser(data.user);

      return data.user;
    } catch (err) {
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      setLoading(true);

      await logout();

      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,

    handleLogin,
    handleRegister,
    handleLogout,
    getCurrentUser,
  };
};