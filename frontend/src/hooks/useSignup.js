import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const signup = async ({ username, password }) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/v1/user/signup",
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

      if (response.status !== 200) {
        toast.error(response.data.message);
      }

      const data = await response.data;

      toast.success(data.message);
    } catch (error) {
      console.log("Error in Submitting the Signup Data:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;
