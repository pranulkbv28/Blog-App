import { useState } from "react";
import toast from "react-hot-toast";
import handleInputs from "../utils/handleInputs";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice/userSlice";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async ({ username, password }) => {
    const success = handleInputs({ username, password });

    if (!success) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
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

      if (response.status !== 200) {
        toast.error(response.data.message);
      }

      const data = await response.data.data;

      console.log(data);

      toast.success("Login Successful");
      localStorage.setItem("user", JSON.stringify(data.loggedInUser));
      localStorage.setItem("accessToken", data.accessToken);
      dispatch(setUser(data.loggedInUser));
    } catch (error) {
      console.log("Error in Submitting the Login Data:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export default useLogin;
