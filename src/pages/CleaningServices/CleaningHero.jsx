import styles from "./CleaningHero.module.css";

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
          Book a Session
        </a>
      </header>
    </div>
  );
}

export default CleaningHero;
