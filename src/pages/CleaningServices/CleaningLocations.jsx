import styles from "./CleaningLocations.module.css";

function CleaningLocations() {
  return (
    <section className={styles.LocationSection}>
      <div className={styles.LocationContainer}>
        <img
          className={styles.LocationImg}
          src="/images/cleaninglocation.png"
          alt="havannah cleaning locations globe"
        />
        <div className={styles.LocationsTextContainer}>
          <h2 className={styles.TextHeader}>
            Transforming Spaces, <br /> One Sparkle at a Time <br />{" "}
            <strong className={styles.strongHeader}>
              Find us in 6 new locations!
            </strong>
          </h2>
          <h3 className={styles.TextSecondary}>
            <div className={styles.paddedBig}>Cam & Dursley</div>
            <div className={styles.paddedSmall}>Berkley</div>
            <div className={styles.paddedSmall}>Stroud</div>
            <div className={styles.paddedBig}>Gloucester</div>
            <div className={styles.paddedBig}>Bristol</div>
            <div className={styles.paddedSmall}>Stonehouse</div>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default CleaningLocations;
