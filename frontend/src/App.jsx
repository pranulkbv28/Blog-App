import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import Home from "./pages/Home/Home";
import TestPage2 from "./pages/TestPage2/TestPage2";
import TestPage1 from "./pages/TestPage1/TestPage1";
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
          <Route path="test-page-1" element={<TestPage1 />} />
          <Route path="test-page-2" element={<TestPage2 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
