import Footer from "../../components/Footer";
import HomeNav from "../Homepage/HomeNav";
import BusinessLogic from "./BusinessLogic";
import CarouselV2 from "./CarouselV2";
import Hero from "./Hero";
import styles from "./HomepageV2.module.css";
import IconFeaturesV2 from "./IconFeaturesV2";
import SocialProof from "./SocialProof";
import TransformingSection from "./TransformingSection";
import UpgradeSection from "./UpgradeSection";
import WhyChooseUs from "./WhyChooseUs";

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
      <section>
        <SocialProof />
      </section>
      <section className={styles.sectionContainer}>
        <CarouselV2 />
      </section>
      <section className={styles.sectionContainer}>
        <WhyChooseUs />
      </section>
      <section>
        <TransformingSection />
      </section>
      <section className={styles.sectionContainer}>
        <UpgradeSection />
      </section>
      <Footer />
    </div>
  );
}

export default HomepageV2;
