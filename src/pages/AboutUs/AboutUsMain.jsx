import HomeNav from "../Homepage/HomeNav";
import AboutUsMainSection from "./AboutUsMainSection";
import Footer from "../../components/Footer";

function AboutUsMain() {
  document.title = "Havannah Global Limited | About Us";
  return (
    <div>
      <HomeNav />
      <AboutUsMainSection />
      <Footer />
    </div>
  );
}

export default AboutUsMain;
