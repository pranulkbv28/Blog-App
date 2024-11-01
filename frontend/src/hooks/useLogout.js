import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice/userSlice";

const useLogout = () => {
  const [loading, setLoading] = useState();
  const dispatch = useDispatch();

  const logout = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "/api/v1/user/logout",
        {},
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
      localStorage.removeItem("accessToken");
      localStorage.removeItem("user");
      dispatch(setUser(null));
      window.location.reload();
    } catch (error) {
      console.log("Error in Logging out:", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
