import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
  const user = null;
  return user ? <Outlet /> : <Navigate to={"/auth/login"} />;
}

export default ProtectedRoute;
