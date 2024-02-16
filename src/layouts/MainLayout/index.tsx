import { NavLink, Outlet } from "react-router-dom";

import styles from "./styles.module.css";

function MainLayout() {
  return (
    <div className={styles.grid}>
      <aside>
        <nav className={styles.navigation}>
          <fieldset className={styles.navigationSection}>
            <legend>General</legend>
            <NavLink to="/">Home</NavLink>
          </fieldset>
          <fieldset className={styles.navigationSection}>
            <legend>JavaScript</legend>
            <NavLink to="/theme-mode">Theme Mode</NavLink>
          </fieldset>
          <fieldset className={styles.navigationSection}>
            <legend>CSS</legend>
            <NavLink to="/responsive-pills">Responsive Pills</NavLink>
          </fieldset>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export { MainLayout };
