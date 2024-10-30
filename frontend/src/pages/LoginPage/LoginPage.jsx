import { Link } from "react-router-dom";
import styles from "./loginpage.module.css";

function LoginPage() {
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
        <form className={`${styles.form}`}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label htmlFor="username">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Enter your password"
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
            <button>Sign Up</button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
