import Footer from "../../components/Footer";
import ChooseSection from "./ChooseSection";
import CleaningHero from "./CleaningHero";
import CleaningLocations from "./CleaningLocations";
import CleaningNav from "./CleaningNav";
import CleaningTeam from "./CleaningTeam";
import IconFeatures from "./IconFeatures";

function CleaningMain() {
  document.title = "Havannah Cleaning Services";
  document.getElementsByTagName("META")[2].content =
    "Say Goodbye To Clutter!,Book a Session and Embrace simplicity and reclaim your space. Discover the freedom of a clutter-free life with our tailored cleaning solutions ";
  return (
    <div>
      <CleaningNav />
      <main>
        <CleaningHero />
        <IconFeatures />
        <ChooseSection />
        <CleaningTeam />
        <CleaningLocations />
      </main>
      <Footer />
    </div>
  );
}

export default CleaningMain;
