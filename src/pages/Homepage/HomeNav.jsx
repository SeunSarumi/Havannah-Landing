import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import HomeLogo from "./HomeLogo";
import "./HomeNav.css";
import { useRef } from "react";
import { motion } from "framer-motion";

const navVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

function HomeNav() {
  const navRef = useRef();
  const listRef = useRef();
  const navBtn = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("open-nav");
    listRef.current.classList.toggle("nav-list-open");
    navBtn.current.classList.toggle("mobile-close");
  };

  return (
    <motion.header
      className="navBody"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <HomeLogo />
      <nav ref={navRef} className="linksContainer">
        <motion.ul
          ref={listRef}
          className="nav__list"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.li variants={linkVariants}>
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              className="navLink"
              to="services"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Our Services
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              className="navLink"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              About Us
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link
              className="navLink"
              to="locations"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Locations
            </Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <a
              href="https://dejialaka.typeform.com/to/xPB9kKax"
              className="navBtn"
            >
              Contact Us
            </a>
          </motion.li>
        </motion.ul>
      </nav>
      <button
        onClick={showNavbar}
        ref={navBtn}
        className="mobile-button mobile-open"
      >
        <img
          className="mobile-open-btn"
          src="/images/menu-open.svg"
          alt="burger menu"
        />
        <img
          className="mobile-close-btn"
          src="/images/close.svg"
          alt="close menu"
        />
      </button>
    </motion.header>
  );
}

export default HomeNav;
