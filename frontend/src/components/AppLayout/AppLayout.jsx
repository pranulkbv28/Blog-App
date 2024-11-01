import { Outlet } from "react-router-dom";
// import useLogout from "../../hooks/useLogout";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function AppLayout() {
  // const { logout, loading } = useLogout();

  // const handleClick = async () => {
  //   await logout();
  // };

  return (
    <ProtectedRoute>
      <div>
        <Outlet />
      </div>
    </ProtectedRoute>
  );
}

export default AppLayout;
