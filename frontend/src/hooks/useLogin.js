import { useState } from "react";
import toast from "react-hot-toast";
import handleInputs from "../utils/handleInputs";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const login = async ({ username, password }) => {
    const success = handleInputs({ username, password });

    if (!success) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      // const response = await fetch("/api/v1/user/login", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ username, password }),
      // });

      const response = await axios.post(
        "/api/v1/user/login",
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.data;

      console.log(data);

      setUser(data);

      toast.success("Login Successful");
    } catch (error) {
      console.log("Error in Submitting the Login Data:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, user, loading };
};

export default useLogin;
