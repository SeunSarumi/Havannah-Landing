import styles from "./AboutUs.module.css";

function AboutUs() {
  return (
    <section className={styles.aboutUsSection}>
      <img className={styles.aboutUsImage} src="/images/stars.png" alt="" />
      <div className={styles.textContainer}>
        <h2 className={styles.textHeader}>Operating in 15 Markets</h2>
        <p className={styles.textSecondary}>
          Lorem ipsum dolor sit amet consectetur. Sed amet aliquam morbi purus.
          Vulputate ac turpis ac nunc. Sit non id nibh nunc integer risus enim.
          Sed sed porta tortor sapien aliquam ipsum ut enim. Nunc sollicitudin
          commodo eu placerat. Vestibulum quam donec elementum a netus. Aenean
          sagittis neque risus amet ullamcorper id in. Integer nunc nulla
          vestibulum lacinia neque auctor imperdiet.
        </p>
      </div>
      {/* 2nd text */}
      <div className={styles.textContainer}>
        <h2 className={styles.textHeader}>Learn More About Us</h2>
        <p className={styles.textSecondary}>
          Lorem ipsum dolor sit amet consectetur. Sed amet aliquam morbi purus.
          Vulputate ac turpis ac nunc. Sit non id nibh nunc integer risus enim.
          Sed sed porta tortor sapien aliquam ipsum ut enim. Nunc sollicitudin
          commodo eu placerat. Vestibulum quam donec elementum a netus. Aenean
          sagittis neque risus amet ullamcorper id in. Integer nunc nulla
          vestibulum lacinia neque auctor imperdiet.
        </p>
      </div>
      <img
        className={styles.aboutUsImage}
        src="/images/hands-images.png"
        alt=""
      />
    </section>
  );
}

export default AboutUs;
