import styles from "./CarouselV2.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import InstagramEmbed from "../../components/InstagramEmbed";

function CarouselV2() {
  const settings = {
    // className: "center",
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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerPadding: "0px",
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
          // fade: true,
          // variableWidth: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  // for instagram posts

  const posts = [
    "https://www.instagram.com/p/DUmGY7iCK3r/",
    "https://www.instagram.com/p/DVvr9ijCO93/",
    "https://www.instagram.com/p/DUmLpFHiEDh/",
    "https://www.instagram.com/p/DK-O_cxI7ff/",
  ];

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
          <InstagramEmbed url={posts[0]} />
          <InstagramEmbed url={posts[1]} />
          <InstagramEmbed url={posts[2]} />
          <InstagramEmbed url={posts[3]} />
        </Slider>
      </div>
    </div>
  );
}

export default CarouselV2;
