import { Link, Outlet } from "react-router-dom";
import styles from "./authlayout.module.css";

function AuthLayout() {
  return (
    <div className={`${styles.body}`}>
      <div className={`${styles.header}`}>
        <div className={`${styles.hyperlinksContainer}`}>
          <h2 className={`${styles.hyperlink}`}>
            <Link to={"/"}>Home</Link>
          </h2>
          <h2 className={`${styles.hyperlink}`}>
            <Link>About Us</Link>
          </h2>
          <h2 className={`${styles.hyperlink}`}>
            <Link>Help</Link>
          </h2>
        </div>
      </div>
      <div className={`flex gap-4 p-4 flex-1`}>
        <div className={`${styles.innerContainer}`}>
          <div className={`${styles.taglinesContainer}`}>
            <h1>Inspire</h1>
            <h1>Connect</h1>
            <h1>Create</h1>
          </div>
        </div>
        <div className={`${styles.outletContainer} flex-1 text-white`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
