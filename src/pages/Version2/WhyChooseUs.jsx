import styles from "./WhyChooseUs.module.css";

function WhyChooseUs() {
  return (
    <div>
      <h1 className={styles.header}>Why Choose Us</h1>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <span className={styles.gridItem}>
            <span className={styles.itemHeaderContainer}>
              <img src="/images/chooseus-icon1.png" alt="" />
              <h4 className={styles.itemHeader}> Professionally Trained</h4>
            </span>
            <p className={styles.itemText}>
              Our team undergoes rigorous training to meet high commercial
              standards.
            </p>
          </span>
          <span className={styles.gridItem}>
            <span className={styles.itemHeaderContainer}>
              <img src="/images/chooseus-icon1.png" alt="" />
              <h4 className={styles.itemHeader}> Professionally Trained</h4>
            </span>
            <p className={styles.itemText}>
              Specialized equipment and methods for large-scale business needs.
            </p>
          </span>
          <span className={styles.gridItem}>
            <span className={styles.itemHeaderContainer}>
              <img src="/images/chooseus-icon1.png" alt="" />
              <h4 className={styles.itemHeader}> Professionally Trained</h4>
            </span>
            <p className={styles.itemText}>
              Cleaning hours that work around your business operations..
            </p>
          </span>
          <span className={styles.gridItem}>
            <span className={styles.itemHeaderContainer}>
              <img src="/images/chooseus-icon1.png" alt="" />
              <h4 className={styles.itemHeader}> Professionally Trained</h4>
            </span>
            <p className={styles.itemText}>
              Safe for your employees and the environment without compromising
              power.
            </p>
          </span>
        </div>
        <div className={styles.imgContainer}>
          <img
            className={styles.mainImg}
            src="/images/cleaningcrew.png"
            alt="cleaning crew on a site"
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
