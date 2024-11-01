import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useLogout from "../../hooks/useLogout";

function ProtectedRoute() {
  const user = localStorage.getItem("user");

  const { logout, loading } = useLogout();

  const handleClick = async () => {
    await logout();
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return user ? (
    <div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        {loading ? "Loading..." : "Logout"}
      </button>
      <Outlet />
    </div>
  ) : (
    <Navigate to={"/auth/login"} />
  );
}

export default ProtectedRoute;
