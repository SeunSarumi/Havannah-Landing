import styles from "./SocialProof.module.css";
import CountUp from "react-countup";

function SocialProof() {
  return (
    <div className={styles.sectionContainer}>
      <span className={styles.item}>
        <h1>
          <CountUp end={300} duration={1.5} suffix="+" enableScrollSpy />
        </h1>
        <h2>Properties Cleaned</h2>
      </span>
      <span className={styles.item}>
        <h1>
          <CountUp end={95} duration={1.5} suffix="%" enableScrollSpy />
        </h1>
        <h2>Client Satisfaction</h2>
      </span>
      <span className={styles.item}>
        <h1>
          <CountUp end={100} duration={1.5} suffix="%" enableScrollSpy />
        </h1>
        <h2>Trusted by Locals</h2>
      </span>
    </div>
  );
}

export default SocialProof;
