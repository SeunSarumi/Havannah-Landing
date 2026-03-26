import styles from "./UpgradeSection.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] },
  },
};

function UpgradeSection() {
  return (
    <motion.div
      className={styles.sectionContainer}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h1 variants={fadeUp}>
        Ready to Upgrade Your Cleaning Standards?
      </motion.h1>

      <motion.h4 variants={fadeUp}>
        Contact us today for a free consultation and quote.
      </motion.h4>

      <motion.a
        className={styles.button}
        href="#"
        variants={buttonVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        REQUEST A FREE QUOTE
      </motion.a>
    </motion.div>
  );
}

export default UpgradeSection;
