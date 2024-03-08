import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Gallery from "./Gallery";
import Hero from "./Hero";
import HomeNav from "./HomeNav";

function Homepage() {
  return (
    <div>
      <HomeNav />
      <Hero />
      <Gallery />
      <Carousel />
      <AboutUs />
    </div>
  );
}

export default Homepage;
