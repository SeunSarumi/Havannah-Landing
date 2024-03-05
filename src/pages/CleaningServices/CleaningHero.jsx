import styles from "./CleaningHero.module.css";
import CleaningPopOut1 from "./CleaningPopOut1";

function CleaningHero() {
  return (
    <div className={styles.hero}>
      <header className={styles.heroTextBox}>
        <h2 className={styles.headerPrimary}>Say Goodbye To Clutter!</h2>
        <h3 className={styles.headerSecondary}>
          Embrace simplicity and reclaim your space. Discover the freedom of a
          clutter-free life with our tailored solutions.
        </h3>
        <a className={styles.btn} href="">
          Book a Session &gt;
        </a>
      </header>
      <CleaningPopOut1 />
    </div>
  );
}

export default CleaningHero;
