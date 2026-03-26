import styles from "./IconFeaturesV2.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

function IconFeaturesV2() {
  return (
    <motion.section
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={iconVariants} className={styles.featureContainer}>
        <img src="/images/icon-img1.png" alt="" />
        <div className={styles.featureText}>Office Cleaning</div>
      </motion.div>
      <motion.div variants={iconVariants} className={styles.featureContainer}>
        <img src="/images/icon-img2.png" alt="" />
        <div className={styles.featureText}>Builders Cleans</div>
      </motion.div>
      <motion.div variants={iconVariants} className={styles.featureContainer}>
        <img src="/images/icon-img3.png" alt="" />
        <div className={styles.featureText}>Care Home Cleaning</div>
      </motion.div>
      <motion.div variants={iconVariants} className={styles.featureContainer}>
        <img src="/images/icon-img4.png" alt="" />
        <div className={styles.featureText}>School Cleaning</div>
      </motion.div>
      <motion.div variants={iconVariants} className={styles.featureContainer}>
        <img src="/images/icon-img5.png" alt="" />
        <div className={styles.featureText}>Airbnb Changeovers</div>
      </motion.div>
    </motion.section>
  );
}

export default IconFeaturesV2;
