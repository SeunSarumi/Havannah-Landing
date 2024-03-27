import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        {/* logo container */}
        <figure className={styles.footerLogoContainer}>
          <img src="/images/footer-logo.png" alt="" />
        </figure>
        {/* 2nd container */}
        <div className={styles.footerSecondContainer}>
          <h1 className={styles.footerHeading}>Contact Us</h1>
          {/* container for info */}
          <address className={styles.footerInfoContainer}>
            <div className={styles.footerInfoContained}>
              <h3 className={styles.footerInfoHeading}>Address</h3>
              <div className={styles.footerInfoSecondary}>
                Cam, Bristol, Gloucester
              </div>
            </div>
            <div className={styles.footerInfoContained}>
              <h3 className={styles.footerInfoHeading}>Email</h3>
              <a
                className={styles.footerAddress}
                href="mailto:info@havannahgloballimted.com"
              >
                info@havannahgloballimted.com
              </a>
            </div>
          </address>
          <div className={styles.footerBottom1}>
            <button className={styles.btn}>
              <img
                className={styles.btnImg}
                src="/images/chat-on-whatsapp.png"
                alt=""
              />
            </button>
          </div>
        </div>
        {/* 3rd container */}
        <div className={styles.footerThirdContainer}>
          <h1 className={styles.footerHeading}>Stay Connected</h1>
          <div className={styles.footerInfoContained}>
            <h3 className={styles.footerInfoSecondary}>
              Keep up to date with industry insights and latest news
            </h3>
          </div>
          <div className={styles.footerBottom2}>
            <a href="https://www.facebook.com/people/Havannah-Cleaning-Services/61557519307719/?mibextid=qi2Omg">
              <img
                className={styles.facebook}
                src="/images/facebook.png"
                alt="havanah global limited facebook"
              />
            </a>
            {/* <a href="#">
              <img
                src="/images/twitter.png"
                alt="havanah global limited twitter"
              />
            </a> */}
            {/* <a href="#">
              <img
                src="/images/linkedin.png"
                alt="havanah global limited linkedin"
              />
            </a> */}
            <a href="#">
              <img
                src="/images/instagram.png"
                alt="havanah global limited instagram"
              />
            </a>
            {/* <a href="#">
              <img
                src="/images/youtube.png"
                alt="havanah global limited youtube"
              />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
