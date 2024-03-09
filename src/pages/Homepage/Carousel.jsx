import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
  };
  return (
    <section className={styles.sectionCarousel}>
      <h2 className={styles.CarouselHeader}>What our Clients are saying</h2>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          <div className={styles.CarouselComponent}>
            <blockquote className={styles.CarouselQoute}>
              Lorem ipsum dolor sit amet consectetur. Cursus ante volutpat
              dignissim ultricies proin. Elit montes nam orci lacus ut cursus
              integer proin id. Libero nunc iaculis pretium mollis venenatis
              facilisi viverra vestibulum. Id leo eu rhoncus nulla tristique
              odio non cursus ac. Et nec tristique nisl eget nunc. Augue egestas
              nulla duis cras enim venenatis enim auctor. Elit enim enim est
              commodo est turpis neque aenean gravida.
            </blockquote>
            <p className={styles.quotedName}> -Terry</p>
          </div>
          <div className={styles.CarouselComponent}>
            <blockquote className={styles.CarouselQoute}>
              Lorem ipsum dolor sit amet consectetur. Cursus ante volutpat
              dignissim ultricies proin. Elit montes nam orci lacus ut cursus
              integer proin id. Libero nunc iaculis pretium mollis venenatis
              facilisi viverra vestibulum. Id leo eu rhoncus nulla tristique
              odio non cursus ac. Et nec tristique nisl eget nunc. Augue egestas
              nulla duis cras enim venenatis enim auctor. Elit enim enim est
              commodo est turpis neque aenean gravida.
            </blockquote>
            <p className={styles.quotedName}> -Terry</p>
          </div>
          <div className={styles.CarouselComponent}>
            <blockquote className={styles.CarouselQoute}>
              Lorem ipsum dolor sit amet consectetur. Cursus ante volutpat
              dignissim ultricies proin. Elit montes nam orci lacus ut cursus
              integer proin id. Libero nunc iaculis pretium mollis venenatis
              facilisi viverra vestibulum. Id leo eu rhoncus nulla tristique
              odio non cursus ac. Et nec tristique nisl eget nunc. Augue egestas
              nulla duis cras enim venenatis enim auctor. Elit enim enim est
              commodo est turpis neque aenean gravida.
            </blockquote>
            <p className={styles.quotedName}> -Terry</p>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Carousel;
