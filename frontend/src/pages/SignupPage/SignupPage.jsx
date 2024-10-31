import { Link } from "react-router-dom";
import styles from "./signuppage.module.css";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

function SignupPage() {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const { loading, signup } = useSignup();

  const handleClick = async (event) => {
    event.preventDefault();
    await signup(inputs);
  };

  return (
    <div className={`${styles.body}`}>
      <h1 className={`${styles.heading} text-3xl text-center font-semibold`}>
        Join our community! Discover a world of inspiration, share your own
        stories, and connect with others who share your passions. Let&apos;s
        create something amazing together.
      </h1>
      <div className={`${styles.formContainer}`}>
        <h1 className="text-3xl font-semibold text-black mb-4">
          Sign Up to start sharing!
        </h1>
        <form className={`${styles.form}`}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
        </form>
        <div className={`${styles.formFooterContainer}`}>
          <span>
            <p>Already have an account?</p>
            <p className={`${styles.link}`}>
              <Link to={"/auth/login"}>Login</Link>
            </p>
          </span>
          <span className={`${styles.btnContainer}`}>
            <button onClick={handleClick}>
              {loading ? "Loading..." : "Sign Up"}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
