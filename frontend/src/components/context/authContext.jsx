import { createContext, useContext, useState } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [loading, setLoading] = useState(false);

  // ==================Login=============================
  const Login = async (inputData) => {
    setLoading(true);
    try {
      const response = await fetch("api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not login");
      }
      localStorage.setItem("user", JSON.stringify(data));
      setAuthUser(data);
      // console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // =============SignUp==================
  const SignUp = async (inputData) => {
    setLoading(true);
    try {
      const response = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not signup");
      }
      localStorage.setItem("user", JSON.stringify(data));
      setAuthUser(data);
    } catch(error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    // console.log(data);
  };
  
// ===================Logout=======================
  const Logout = async () => {
    try {
      const response = await fetch("api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Could not logout");
      }
      localStorage.removeItem("user");
      setAuthUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <authContext.Provider value={{ Login, SignUp, Logout, authUser, loading }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};
