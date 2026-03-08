import Footer from "../../components/Footer";
import HomeNav from "../Homepage/HomeNav";
import BusinessLogic from "./BusinessLogic";
import CarouselV2 from "./CarouselV2";
import Hero from "./Hero";
import styles from "./HomepageV2.module.css";
import IconFeaturesV2 from "./IconFeaturesV2";

function HomepageV2() {
  return (
    <div>
      <HomeNav />
      <main className={styles.mainSection}>
        <Hero />
      </main>
      <IconFeaturesV2 />
      <section className={styles.sectionContainer}>
        <BusinessLogic />
      </section>
      <section className={styles.sectionContainer}>
        <CarouselV2 />
      </section>
      <Footer />
    </div>
  );
}

export default HomepageV2;
