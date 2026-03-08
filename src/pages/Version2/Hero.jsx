import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.heroContainer}>
      {/* textbox */}
      <div className={styles.textContainer}>
        <h1 className={styles.Heading}>
          Professional <br /> Commercial Cleaning <br /> You Can Rely On
        </h1>
        <h3 className={styles.subtext}>
          Reliable, high-quality cleaning services for <br /> businesses,
          organisations, hotels, schools, <br /> care homes, and rental
          properties.
        </h3>
        {/* button box */}
        <div className={styles.btnContainer}>
          {" "}
          <a href="#" className={styles.button}>
            GET A FREE QUOTE
          </a>
          <a href="#" className={styles.button}>
            BOOK A SITE VISIT
          </a>
        </div>
      </div>
      {/* imagebox */}
      <img src="/images/hero-img.png" alt="" />
    </div>
  );
}

export default Hero;
