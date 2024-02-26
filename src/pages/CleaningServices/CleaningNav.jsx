import CleaningLogo from "./CleaningLogo";
import styles from "./CleaningNav.module.css";

function CleaningNav() {
  return (
    <div className={styles.navBody}>
      <CleaningLogo />
      <div className={styles.linksContainer}>
        <a className={styles.navLink} href="">
          Home
        </a>
        <a className={styles.navLink} href="">
          Our Services
        </a>
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
    </div>
  );
}

export default CleaningNav;
