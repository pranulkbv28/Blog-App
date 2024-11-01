import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  const loggedinUser = useSelector((state) => state.user.user);

  console.log(loggedinUser);

  return (
    <div>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route
            path="login"
            element={
              loggedinUser.username ? (
                <Navigate to={"/app/home"} />
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path="signup"
            element={
              loggedinUser.username ? (
                <Navigate to={"/app/home"} />
              ) : (
                <SignupPage />
              )
            }
          />
        </Route>
        <Route path="/app" element={<ProtectedRoute />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
