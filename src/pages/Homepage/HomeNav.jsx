import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import HomeLogo from "./HomeLogo";
import "./HomeNav.css";
import { useRef } from "react";

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
    <header className="navBody">
      <HomeLogo />
      <nav ref={navRef} className="linksContainer">
        <ul ref={listRef} className="nav__list ">
          <li>
            <NavLink className="navLink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/cleaningservices">
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <Link
              className="navLink"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              Locations
            </Link>
          </li>
          <li>
            <a
              href="https://dejialaka.typeform.com/to/xPB9kKax"
              className="navBtn"
            >
              Contact Our Experts
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={showNavbar}
        ref={navBtn}
        className="mobile-button mobile-open"
      >
        <img
          className="mobile-open-btn"
          src="/images/menu.svg"
          alt="burger menu"
        ></img>
        <img
          className="mobile-close-btn"
          src="/images/close.svg"
          alt="close menu"
        ></img>
      </button>
    </header>
  );
}

export default HomeNav;
