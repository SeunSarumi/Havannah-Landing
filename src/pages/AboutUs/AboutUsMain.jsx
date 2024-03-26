import HomeNav from "../Homepage/HomeNav";
import AboutUsMainSection from "./AboutUsMainSection";

function AboutUsMain() {
  document.title = "Havannah Global Limited | About Us";
  return (
    <div>
      <HomeNav />
      <AboutUsMainSection />
    </div>
  );
}

export default AboutUsMain;
