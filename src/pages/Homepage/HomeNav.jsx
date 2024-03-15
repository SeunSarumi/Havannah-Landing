import { NavLink } from "react-router-dom";
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
    <nav className="navBody">
      <HomeLogo />
      <div ref={navRef} className="linksContainer">
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
            <a className="navLink" href="#aboutus">
              About Us
            </a>
          </li>
          <li>
            <NavLink className="navLink" to="/">
              Locations
            </NavLink>
          </li>
          <li>
            <NavLink className="navBtn">Contact Our Experts</NavLink>
          </li>
        </ul>
      </div>
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
    </nav>
  );
}

export default HomeNav;
