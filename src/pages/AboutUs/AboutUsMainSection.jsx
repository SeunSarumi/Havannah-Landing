import styles from "./AboutUsMainSection.module.css";

function AboutUsMainSection() {
  return (
    <section className={styles.AboutUsSection}>
      <h1 className={styles.Header1}>About Us</h1>
      <div className={styles.border1}></div>
      <h2 className={styles.Header2}>Havannah Global Limited</h2>
      <p className={styles.writeup}>
        At Havannah Global Limited, our commitment to Excellence Shines <br />{" "}
        through a diverse portfolio of subsidiaries, each reinforcing our <br />
        mission to provide top-tier, impactful, and sustainable products and{" "}
        <br />
        services. Our subsidiaries collectively showcase our mission to <br />{" "}
        redefine industries through integrity and accessible solutions.
      </p>
      <h2 className={styles.Header2}>Subsidiaries</h2>
      <h3 className={styles.writeupHeader}>Havannah Cleaning Services (HCS)</h3>
      <p className={styles.writeup}>
        Dedicated to sustainable industry practices, Havannah Cleaning <br />{" "}
        Services focuses on providing affordable and pristine cleaning <br />{" "}
        services. From one-time to recurring services, HCS sets the standard{" "}
        <br /> for the future of home and office cleaning.
      </p>
      <h3 className={styles.writeupHeader}>Havannah Business Global (HBG)</h3>
      <p className={styles.writeup}>
        Havannah Business Global is our product and sales wing, focused on{" "}
        <br />
        identifying and providing products to consumers via a dedicated <br />{" "}
        Amazon page. With a focus on the best quality, most in-vogue <br />{" "}
        products sourced from reputable manufacturers and sustainable <br />{" "}
        practices, HBG is disrupting the world of home organization and <br />{" "}
        improvement solutions.
      </p>
      <div className={styles.border2}></div>
      <p className={styles.writeup}>
        As a parent company, Havannah Global Limited is proud of the <br />{" "}
        collective prowess of our subsidiaries. Headed by an ultramodern <br />{" "}
        team of visionaries and committed individuals, our business model <br />{" "}
        excels on teamwork, collaboration, and inclusion. Going forward, <br />{" "}
        Havannah Global Limited is committed to breaking into new industries,{" "}
        <br /> encouraging innovation, and infusing positivity into the world
        via the <br /> collective efforts of our subsidiaries.
      </p>
      <p className={styles.writeup}>
        With a commitment to excellence and a passion for pristine spaces, we{" "}
        <br />
        specialize in delivering top-quality cleaning solutions tailored to your{" "}
        <br />
        specific needs. Whether it’s residential, commercial, or industrial{" "}
        <br />
        cleaning, trust us to leave your environment shining bright. Let’s{" "}
        <br />
        elevate cleanliness to a whole new level together!”
      </p>
    </section>
  );
}

export default AboutUsMainSection;
