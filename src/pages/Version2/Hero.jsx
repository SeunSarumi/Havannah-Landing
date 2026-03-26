import styles from "./HeroV2.module.css";
import { motion } from "framer-motion";

// Parent container that staggers children
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Each child fades up into place
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Image slides in from the right
const slideIn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function Hero() {
  return (
    <div className={styles.heroContainer}>
      {/* Staggered text block */}
      <motion.div
        className={styles.textContainer}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className={styles.Heading} variants={fadeUp}>
          Professional <br /> Commercial Cleaning <br /> You Can Rely On
        </motion.h1>

        <motion.h3 className={styles.subtext} variants={fadeUp}>
          Reliable, high-quality cleaning services for <br /> businesses,
          organisations, hotels, schools, <br /> care homes, and rental
          properties.
        </motion.h3>

        <motion.div className={styles.btnContainer} variants={fadeUp}>
          <a href="#" className={styles.button}>
            GET A FREE QUOTE
          </a>
        </motion.div>
      </motion.div>

      {/* Image slides in independently */}
      <motion.img
        className={styles.heroImg}
        src="/images/hero-img.png"
        alt=""
        variants={slideIn}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
}

export default Hero;
