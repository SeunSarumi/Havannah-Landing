import styles from "./CleaningPopOut1.module.css";

function CleaningPopOut1() {
  return (
    <div className={styles.container}>
      {/* div for top text */}
      <div className={styles.topTextContainer}>
        <h1 className={styles.topText1}>&gt; For Inquires</h1>
        <h1 className={styles.topText2}> 07496791064</h1>
      </div>
      <div className={styles.bottomTextContainer}>
        <p>
          Contact <strong>Angela Okoko</strong> to schedule your complimentary
          consultation. Whether you seek pristine ironing, deluxe laundry care,
          or reliable housekeeping and home cleaning services, we're here to
          meet your needs.
        </p>

        <strong>Opening Times</strong>

        <p>Mon - Fri: 9am–5pm</p>
      </div>
    </div>
  );
}

export default CleaningPopOut1;
