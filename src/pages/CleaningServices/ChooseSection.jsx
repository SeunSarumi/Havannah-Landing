import styles from "./ChooseSection.module.css";

function ChooseSection() {
  return (
    <section>
      <img
        className={styles.img1}
        src="/images/mother-daughter.png"
        alt="havannah global mother and daugter"
      />

      <h1 className={styles.header}> Why Choose Us</h1>

      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContained}>
            <img src="/images/team.png" alt="havannah global team" />
            <h3 className={styles.primaryText}>Trusted Team</h3>
            <p className={styles.secondaryText}>
              Carefully selected and professionally trained
            </p>
          </div>
          <div className={styles.iconContained}>
            <img src="/images/eco-leaf.png" alt="havannah global team" />
            <h3 className={styles.primaryText}>Eco-Friendly</h3>
            <p className={styles.secondaryText}>
              Eco-Friendly products for a healthy home
            </p>
          </div>
          <div className={styles.iconContained}>
            <img src="/images/custom-settings.png" alt="havannah global team" />
            <h3 className={styles.primaryText}>Customized Solutions</h3>
            <p className={styles.secondaryText}>
              Flexibility to accommodate client requirements
            </p>
          </div>
          <div className={styles.iconContained}>
            <img src="/images/shield.png" alt="havannah global team" />
            <h3 className={styles.primaryText}>
              Reliability & Trustworthiness
            </h3>
            <p className={styles.secondaryText}>
              Transparent and dependable services guaranteed
            </p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src="/images/family.png" alt="havannah global family image" />
        </div>
      </div>
      <div className={styles.popOutContainer}>
        <div className={styles.popOutHeader}>
          <h2>Customer Feedback</h2>
        </div>
        <div className={styles.popOutSecondary}>
          <h3>
            300+ Homes cleaned so far and 95% of our clients say that “we make
            their homes happier”
          </h3>
        </div>
      </div>
    </section>
  );
}

export default ChooseSection;
