import { NavLink, Outlet } from "react-router-dom";

import styles from "./styles.module.css";

function MainLayout() {
  return (
    <div className={styles.grid}>
      <aside>
        <nav className={styles.navigation}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/theme-mode">Theme Mode</NavLink>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { MainLayout };
