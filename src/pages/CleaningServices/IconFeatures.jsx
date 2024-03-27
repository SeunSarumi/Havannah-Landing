import styles from "./IconFeatures.module.css";

function IconFeatures() {
  return (
    <section className={styles.container}>
      <div className={styles.featureContainer}>
        <img src="/images/house-img.png" alt="" />
        <div className={styles.featureText}>House Cleaning</div>
      </div>
      <div className={styles.featureContainer}>
        <img src="/images/office-img.png" alt="" />
        <div className={styles.featureText}>Office Cleaning</div>
      </div>
      <div className={styles.featureContainer}>
        <img src="/images/transition-img.png" alt="" />
        <div className={styles.featureText}>Transition Cleaning</div>
      </div>
    </section>
  );
}

export default IconFeatures;
