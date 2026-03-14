import styles from "./CarouselV2.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function CarouselV2() {
  const settings = {
    className: "center",
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    speed: 1000,
    autoplay: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          centerPadding: "0px",
        },
      },
    ],
  };
  return (
    <div className={styles.sectionCarousel}>
      <h2 className={styles.caroHeader}>Recent Commercial Cleaning Projects</h2>
      <h3 className={styles.caroSubtext}>
        A snapshot of the offices, schools, care homes, hotels, and rental{" "}
        <br />
        properties we keep spotless every day.
      </h3>
      <div className={styles.carouselContainer}>
        <Slider {...settings}>
          {/* Carosel Card */}
          <div className={styles.carouselCard}>
            <img
              className={styles.caroImg}
              src="./images/carousel-img1.png"
              alt="toilet cleaning image"
            />
            <div className={styles.textBox}>
              <h3 className={styles.cardHeader}>
                Weekly Office Contract – City HQ
              </h3>
              <h4 className={styles.cardSubtext}>
                4 floors | Evening cleans | Touchpoint sanitisation
              </h4>
              <span className={styles.highlight}>OFFICE CLEANING</span>
            </div>
          </div>
          {/* CARD END */}
          {/* Carosel Card */}
          <div className={styles.carouselCard}>
            <img
              className={styles.caroImg}
              src="./images/carousel-img1.png"
              alt="toilet cleaning image"
            />
            <div className={styles.textBox}>
              <h3 className={styles.cardHeader}>
                Weekly Office Contract – City HQ
              </h3>
              <h4 className={styles.cardSubtext}>
                4 floors | Evening cleans | Touchpoint sanitisation
              </h4>
              <span className={styles.highlight}>OFFICE CLEANING</span>
            </div>
          </div>
          {/* CARD END */}
        </Slider>
      </div>
    </div>
  );
}

export default CarouselV2;
