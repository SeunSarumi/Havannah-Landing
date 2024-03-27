import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.aboutUsSection} id="aboutus">
      <img
        className={styles.aboutUsImage}
        src="/images/stars.png"
        alt="havannah global stars image"
      />
      <div className={styles.textContainer}>
        <h2 className={styles.textHeader}>Operating in 6 Areas</h2>
        <h3 className={styles.textSecondary1}>
          <div className={styles.paddedBig}>Cam & Dursley</div>
          <div className={styles.paddedSmall}>Berkley</div>
          <div className={styles.paddedSmall}>Stroud</div>
          <div className={styles.paddedBig}>Gloucester</div>
          <div className={styles.paddedBig}>Bristol</div>
          <div className={styles.paddedSmall}>Stonehouse</div>
        </h3>
      </div>
      {/* 2nd text */}
      <div className={styles.textContainer}>
        <h2 className={styles.textHeader}>Learn More About Us</h2>
        <h3 className={styles.textSecondary}>
          At Havannah Global Limited, our commitment to excellence shines
          through a diverse portfolio of subsidiaries, each reinforcing our
          mission to provide top-tier, impactful, and sustainable products and
          services. Our subsidiaries collectively showcase our mission to
          redefine industries through integrity and accessible solutions.
        </h3>
      </div>
      <img
        className={styles.aboutUsImage}
        src="/images/hands-images.png"
        alt="havannah global hands holding"
      />
    </section>
  );
}

export default AboutUs;
