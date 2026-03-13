import styles from "./IconFeaturesV2.module.css";

function IconFeaturesV2() {
  return (
    <section className={styles.container}>
      <div className={styles.featureContainer}>
        <img src="/images/icon-img1.png" alt="" />
        <div className={styles.featureText}>Office Cleaning</div>
      </div>
      <div className={styles.featureContainer}>
        <img src="/images/icon-img2.png" alt="" />
        <div className={styles.featureText}>Builders Cleans</div>
      </div>
      <div className={styles.featureContainer}>
        <img src="/images/icon-img3.png" alt="" />
        <div className={styles.featureText}>Care Home Cleaning</div>
      </div>
      <div className={styles.featureContainer}>
        <img src="/images/icon-img4.png" alt="" />
        <div className={styles.featureText}>School Cleaning</div>
      </div>
      <div className={styles.featureContainer}>
        <img src="/images/icon-img5.png" alt="" />
        <div className={styles.featureText}>Airbnb Changeovers</div>
      </div>
    </section>
  );
}

export default IconFeaturesV2;
