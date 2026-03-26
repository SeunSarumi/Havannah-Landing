import styles from "./Transforming.module.css";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }, // slight spring overshoot
  },
};

const locations = [
  "Cam & Dursley",
  "Berkley",
  "Stroud",
  "Gloucester",
  "Bristol",
  "Stonehouse",
];

function TransformingSection() {
  return (
    <div className={styles.sectionContainer} id="locations">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Transforming Spaces, One Clean at a Time
      </motion.h1>

      <motion.div
        className={styles.locationContainer}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {locations.map((location) => (
          <motion.span
            key={location}
            className={styles.paddedSmall}
            variants={pillVariants}
          >
            {location}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}

export default TransformingSection;
