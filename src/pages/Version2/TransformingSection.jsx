import styles from "./Transforming.module.css";

function TransformingSection() {
  return (
    <div className={styles.sectionContainer}>
      <h1>Transforming Spaces, One Clean at a Time</h1>
      <div className={styles.locationContainer}>
        <span className={styles.paddedSmall}>Cam & Dursley</span>
        <span className={styles.paddedSmall}>Berkley</span>
        <span className={styles.paddedSmall}>Stroud</span>
        <span className={styles.paddedSmall}>Gloucester</span>
        <span className={styles.paddedSmall}>Bristol</span>
        <span className={styles.paddedSmall}>Stonehouse</span>
      </div>
    </div>
  );
}

export default TransformingSection;
