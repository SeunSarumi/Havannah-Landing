import styles from "./Carousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={styles.sectionCarousel}>
      <h2 className={styles.CarouselHeader}>What our Clients are saying</h2>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          <div className={styles.CarouselComponent}>
            <blockquote className={styles.CarouselQoute}>
              Brilliant cleaning service, we have tried other companies before
              and all been a waste of time so I am very pleased to find someone
              who actually does a proper thorough clean. Vey polite and easy
              communications. Would highly recommend if you are looking for a
              house cleaner
            </blockquote>
            <p className={styles.quotedName}> -Saroj Painter</p>
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
