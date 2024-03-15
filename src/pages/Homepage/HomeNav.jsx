import { NavLink } from "react-router-dom";
import HomeLogo from "./HomeLogo";
import styles from "./HomeNav.module.css";

function HomeNav() {
  return (
    <nav className={styles.navBody}>
      <HomeLogo />
      <div className={styles.linksContainer}>
        <NavLink className={styles.navLink} href="">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="/cleaningservices">
          Our Services
        </NavLink>
        <a className={styles.navLink} href="#aboutus">
          About Us
        </a>
        <NavLink className={styles.navLink} href="">
          Locations
        </NavLink>
      </div>
      <NavLink className={styles.navBtn} href="">
        Contact Our Experts
      </NavLink>
    </nav>
  );
}

export default HomeNav;
