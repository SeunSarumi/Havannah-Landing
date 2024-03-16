import Footer from "../../components/Footer";
import ChooseSection from "./ChooseSection";
import CleaningHero from "./CleaningHero";
import CleaningNav from "./CleaningNav";
import CleaningTeam from "./CleaningTeam";
import IconFeatures from "./IconFeatures";

function CleaningMain() {
  document.title = "Havannah Cleaning Services";
  return (
    <main>
      <CleaningNav />
      <CleaningHero />
      <IconFeatures />
      <ChooseSection />
      <CleaningTeam />
      <Footer />
    </main>
  );
}

export default CleaningMain;
