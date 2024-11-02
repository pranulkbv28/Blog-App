import { Link } from "react-router-dom";
import styles from "./loginpage.module.css";
import useLogin from "../../hooks/useLogin";
import { useEffect, useState } from "react";

function LoginPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { login, loading, user } = useLogin();

  const handleClick = async (event) => {
    event.preventDefault();
    await login(inputs);
  };

  useEffect(() => {
    console.log("User: ", user);
  }, [user]);

  return (
    <div className={`${styles.body}`}>
      <h1 className={`${styles.heading} text-3xl text-center font-semibold`}>
        Welcome back! Dive right back into the conversation. You&apos;ve got so
        much to share and even more to explore. Your voice is invaluable here.
        Let&apos;s make every moment count together.
      </h1>
      <div className={`${styles.formContainer}`}>
        <h1 className="text-3xl font-semibold text-black mb-4">
          Login to resume share!
        </h1>
        <form onSubmit={handleClick} className={`${styles.form}`}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={inputs.username}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  username: e.target.value,
                }))
              }
            />
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) =>
                setInputs((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </div>
        </form>
        <div className={`${styles.formFooterContainer}`}>
          <span>
            <p>Don&apos;t have an account?</p>
            <p className={`${styles.link}`}>
              <Link to={"/auth/signup"}>Sign Up</Link>
            </p>
          </span>
          <span className={`${styles.btnContainer}`}>
            <button onClick={handleClick}>
              {loading ? "Loading..." : "Login"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
