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
            <figure className={styles.paddedBig}>Cam & Dursley</figure>
            <figure className={styles.paddedSmall}>Berkley</figure>
            <figure className={styles.paddedSmall}>Stroud</figure>
            <figure className={styles.paddedBig}>Gloucester</figure>
            <figure className={styles.paddedBig}>Bristol</figure>
            <figure className={styles.paddedSmall}>Stonehouse</figure>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default CleaningLocations;
