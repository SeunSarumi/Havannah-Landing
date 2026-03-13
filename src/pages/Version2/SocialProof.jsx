import styles from "./SocialProof.module.css";

function SocialProof() {
  return (
    <div className={styles.sectionContainer}>
      <span className={styles.item}>
        <h1>300+</h1>
        <h2>Properties Cleaned</h2>
      </span>
      <span className={styles.item}>
        <h1>95%</h1>
        <h2>Client Satisfaction</h2>
      </span>
      <span className={styles.item}>
        <h1>100%</h1>
        <h2>Trusted by Locals</h2>
      </span>
    </div>
  );
}

export default SocialProof;
