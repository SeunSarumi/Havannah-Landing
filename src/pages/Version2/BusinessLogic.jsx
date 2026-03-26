import styles from "./BusinessLogic.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function BusinessLogic() {
  return (
    <div id="services">
      {/* Heading */}
      <motion.div
        className={styles.bizTextContainter}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className={styles.bizHeading}>
          Creating Cleaner Spaces <br /> for Better Business
        </h1>
        <h3 className={styles.bizSubtext}>
          We deliver professional commercial cleaning tailored to your specific
          needs. With fully trained staff, rigorous hygienic standards, and
          flexible schedules, we ensure your environment is spotless, safe, and
          welcoming for staff and visitors alike.
        </h3>
      </motion.div>

      {/* icon grid */}
      <motion.div
        className={styles.cardContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div
          variants={cardVariants}
          className={styles.card}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <img
            className={styles.iconImage}
            src="/images/suitcase-img.png"
            alt="suitcase image"
          />
          <h2 className={styles.cardHeading}>Office Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Daily or weekly office maintenance to keep your workspace productive
            and pristine.
          </h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className={styles.card}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <img
            className={styles.iconImage}
            src="/images/hammer-img.png"
            alt="hammer image"
          />
          <h2 className={styles.cardHeading}>Construction Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Post-build deep cleans to remove dust and debris, preparing sites
            for handover.
          </h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className={styles.card}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <img
            className={styles.iconImage}
            src="/images/heart-img.png"
            alt="heart image"
          />
          <h2 className={styles.cardHeading}>Care Home Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Specialized sanitation and hygiene services for sensitive care
            environments.
          </h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className={styles.card}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <img
            className={styles.iconImage}
            src="/images/school-img.png"
            alt="school image"
          />
          <h2 className={styles.cardHeading}>School Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Safe, DBS-checked cleaning teams ensuring classrooms are healthy and
            clean.
          </h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className={styles.card}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <img
            className={styles.iconImage}
            src="/images/key-img.png"
            alt="key image"
          />
          <h2 className={styles.cardHeading}>Airbnb Changeovers</h2>
          <h3 className={styles.cardSubtext}>
            Reliable turnover service including linen changes and restocking for
            guests.
          </h3>
        </motion.div>

        <motion.div
          variants={cardVariants}
          className={styles.card}
          whileInView={{ opacity: [0, 0.5, 1], y: [60, 20, 0] }}
        >
          <img
            className={styles.iconImage}
            src="/images/star-img.png"
            alt="star image"
          />
          <h2 className={styles.cardHeading}>Deep Cleaning</h2>
          <h3 className={styles.cardSubtext}>
            Intensive one-off cleans to revitalize floors, carpets, and
            hard-to-reach areas.
          </h3>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BusinessLogic;
