import Footer from "../../components/Footer";
import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HomeNav from "./HomeNav";

function Homepage() {
  document.title = "Havannah Global Limited";
  return (
    <div>
      <HomeNav />
      <Hero />
      <Gallery />
      <Carousel />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Homepage;
