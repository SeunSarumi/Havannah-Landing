import styles from "./WhyChooseUs.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function WhyChooseUs() {
  return (
    <div id="aboutus">
      <motion.h1
        className={styles.header}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Why Choose Us
      </motion.h1>

      <div className={styles.container}>
        {/* Text items stagger in from the left */}
        <motion.div
          className={styles.textContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.span variants={itemVariants} className={styles.gridItem}>
            <span className={styles.itemHeaderContainer}>
              <img src="/images/chooseus-icon1.png" alt="" />
              <h4 className={styles.itemHeader}>Professionally Trained</h4>
            </span>
            <p className={styles.itemText}>
              Our team undergoes rigorous training to meet high commercial
              standards.
            </p>
          </motion.span>

          <motion.span variants={itemVariants} className={styles.gridItem}>
            <span className={styles.itemHeaderContainer}>
              <img src="/images/suitcaseborderless-img.png" alt="" />
              <h4 className={styles.itemHeader}>Commercial Focused</h4>
            </span>
            <p className={styles.itemText}>
              Specialized equipment and methods for large-scale business needs.
            </p>
          </motion.span>

          <motion.span variants={itemVariants} className={styles.gridItem}>
            <span className={styles.itemHeaderContainer}>
              <img src="/images/calender-img.png" alt="" />
              <h4 className={styles.itemHeader}>Flexible Scheduling</h4>
            </span>
            <p className={styles.itemText}>
              Cleaning hours that work around your business operations.
            </p>
          </motion.span>

          <motion.span variants={itemVariants} className={styles.gridItem}>
            <span className={styles.itemHeaderContainer}>
              <img src="/images/leaf-img.png" alt="" />
              <h4 className={styles.itemHeader}>Eco-Friendly Products</h4>
            </span>
            <p className={styles.itemText}>
              Safe for your employees and the environment without compromising
              power.
            </p>
          </motion.span>
        </motion.div>

        {/* Image slides in from the right */}
        <motion.div
          className={styles.imgContainer}
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            className={styles.mainImg}
            src="/images/cleaningcrew.png"
            alt="cleaning crew on a site"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
