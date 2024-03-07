import { Link } from "react-router-dom";
import HomeLogo from "./HomeLogo";
import styles from "./HomeNav.module.css";

function HomeNav() {
  return (
    <nav className={styles.navBody}>
      <HomeLogo />
      <div className={styles.linksContainer}>
        <a className={styles.navLink} href="">
          Home
        </a>
        <Link className={styles.navLink} to="/cleaningservices">
          Our Services
        </Link>
        <a className={styles.navLink} href="">
          About Us
        </a>
        <a className={styles.navLink} href="">
          Locations
        </a>
      </div>
      <a className={styles.navBtn} href="">
        Contact Our Experts
      </a>
    </nav>
  );
}

export default HomeNav;
