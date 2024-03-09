import styles from "./CleaningTeam.module.css";

function CleaningTeam() {
  return (
    <section className={styles.teamSection}>
      <img
        className={styles.sectionImg}
        src="/images/cleaning-demo.png"
        alt=""
      />
      <figure className={styles.popOutContainer2}>
        <h2 className={styles.popOutContainer2Header}>
          Join our Cleaning Team
        </h2>
        <p className={styles.popOutContainer2Secondary}>
          Contact <strong>John Doe </strong> to schedule your complimentary
          consultation. Whether you seek pristine ironing, deluxe laundry care,
          or reliable housekeeping and home cleaning services, we're here to
          meet your needs.
        </p>
        <p className={styles.popOutContainer2Cta}>
          FIND OUT MORE &nbsp;{" "}
          <img src="/images/greater-vector-white.svg" alt="" />{" "}
        </p>
      </figure>
    </section>
  );
}

export default CleaningTeam;
