import styles from "./CleaningHero.module.css";
import CleaningPopOut1 from "./CleaningPopOut1";

function CleaningHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.header}>
        <div className={styles.heroTextBox}>
          <h2 className={styles.headerPrimary}>Say Goodbye To Clutter!</h2>
          <h3 className={styles.headerSecondary}>
            Embrace simplicity and reclaim your space. Discover the freedom of a
            clutter-free life with our tailored solutions.
          </h3>
          <a
            className={styles.btn}
            href="https://dejialaka.typeform.com/to/xPB9kKax"
          >
            Book a Session &nbsp;
            <img src="/images/greater-vector-white.svg" alt="" />
          </a>
        </div>
      </div>
      <CleaningPopOut1 />
    </section>
  );
}

export default CleaningHero;
