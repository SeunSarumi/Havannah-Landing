import styles from "./UpgradeSection.module.css";

function UpgradeSection() {
  return (
    <div className={styles.sectionContainer}>
      <h1>Ready to Upgrade Your Cleaning Standards?</h1>
      <h4>Contact us today for a free consultation and quote.</h4>
      <a className={styles.button} href="#">
        REQUEST A FREE QUOTE
      </a>
    </div>
  );
}

export default UpgradeSection;
