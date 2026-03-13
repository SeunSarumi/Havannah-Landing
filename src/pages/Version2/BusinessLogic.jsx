import styles from "./BusinessLogic.module.css";

function BusinessLogic() {
  return (
    <div id="services">
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
            src="/images/hammer-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Construction Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Post-build deep cleans to remove dust and debris, preparing sites
            for handover.
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/heart-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Care Home Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Specialized sanitation and hygiene services for sensitive care
            environments.
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/school-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>School Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Safe, DBS-checked cleaning teams ensuring classrooms are healthy and
            clean..
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/key-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Airbnb Changeovers</h2>
          <h3 className={styles.cardSubtext}>
            Reliable turnover service including linen changes and restocking for
            guests.
          </h3>
        </div>
        {/* card end */}
        {/* Card */}
        <div className={styles.card}>
          <img
            className={styles.iconImage}
            src="/images/star-img.png"
            alt="suitcase image"
          />

          <h2 className={styles.cardHeading}>Deep Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Intensive one-off cleans to revitalize floors, carpets, and
            hard-to-reach areas.
          </h3>
        </div>
        {/* card end */}
      </div>
    </div>
  );
}

export default BusinessLogic;
