import styles from "./BusinessLogic.module.css";

function BusinessLogic() {
  return (
    <div>
      {/* Heading */}
      <div className={styles.bizTextContainter}>
        <h1 className={styles.bizHeading}>
          Creating Cleaner Spaces <br /> for Better Business
        </h1>
        <h3 className={styles.bizSubtext}>
          We deliver professional commercial cleaning tailored to your specific
          needs. With fully trained staff, rigorous hygienic standards, and
          flexible schedules, we ensure your environment is spotless, safe, and
          welcoming for staff and visitors alike.
        </h3>
      </div>
      {/* icon grid */}
      <div className={styles.cardContainer}>
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/suitcase-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Office Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Daily or weekly office maintenance to keep your workspace productive
            and pristine.
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/suitcase-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Office Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Daily or weekly office maintenance to keep your workspace productive
            and pristine.
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/suitcase-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Office Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Daily or weekly office maintenance to keep your workspace productive
            and pristine.
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/suitcase-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Office Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Daily or weekly office maintenance to keep your workspace productive
            and pristine.
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/suitcase-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Office Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Daily or weekly office maintenance to keep your workspace productive
            and pristine.
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/suitcase-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Office Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Daily or weekly office maintenance to keep your workspace productive
            and pristine.
          </h3>
        </div>
        {/* card end */}
      </div>
    </div>
  );
}

export default BusinessLogic;
