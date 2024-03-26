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
          Contact <strong>our experts </strong> to find out about openings in
          our company today. We'll be getting in touch with you if you're a
          right fit for our team.
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
