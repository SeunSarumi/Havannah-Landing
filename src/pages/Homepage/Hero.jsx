import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.HeroContainer}>
      <header className={styles.headerContainer}>
        <h1 className={styles.heroHeaderPrimary}>Connecting Worlds</h1>
        <h3 className={styles.heroHeaderSecondary}>
          Elevate Your Business With Our Global Services
        </h3>
      </header>
      <figure>
        <img
          className={styles.heroImg}
          src="/images/home-hero-img.png"
          alt=""
        />
      </figure>
    </section>
  );
}

export default Hero;
