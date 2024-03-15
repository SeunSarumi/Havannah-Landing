import { NavLink } from "react-router-dom";
import CleaningLogo from "./CleaningLogo";
import styles from "./CleaningNav.module.css";

function CleaningNav() {
  return (
    <nav className={styles.navBody}>
      <CleaningLogo />
      <div className={styles.linksContainer}>
        <NavLink className={styles.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={styles.navLink} href="">
          Our Services
        </NavLink>
        <NavLink className={styles.navLink} href="">
          About Us
        </NavLink>
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

export default CleaningNav;
