import styles from "./ChooseSection.module.css";

function ChooseSection() {
  return (
    <section>
      <img className={styles.img1} src="/images/mother-daughter.png" alt="" />

      <h1 className={styles.header}> Why Choose Us</h1>

      <div className={styles.container}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconContained}>
            <img src="/images/team.png" alt="team" />
            <h3 className={styles.primaryText}>Trusted Team</h3>
            <p className={styles.secondaryText}>
              Carefully selected and professionally trained
            </p>
          </div>
          <div className={styles.iconContained}>
            <img src="/images/eco-leaf.png" alt="team" />
            <h3 className={styles.primaryText}>Eco-Friendly</h3>
            <p className={styles.secondaryText}>
              Eco-Friendly products for a healthy home
            </p>
          </div>
          <div className={styles.iconContained}>
            <img src="/images/team.png" alt="team" />
            <h3 className={styles.primaryText}>Trusted Team</h3>
            <p className={styles.secondaryText}>
              Carefully selected and professionally trained
            </p>
          </div>
          <div className={styles.iconContained}>
            <img src="/images/eco-leaf.png" alt="team" />
            <h3 className={styles.primaryText}>Eco-Friendly</h3>
            <p className={styles.secondaryText}>
              Eco-Friendly products for a healthy home
            </p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src="/images/family.png" alt="" />
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
