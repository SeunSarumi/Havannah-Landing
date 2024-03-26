import { NavLink } from "react-router-dom";
import CleaningLogo from "./CleaningLogo";
import "./CleaningNav.css";
import { useRef } from "react";

function CleaningNav() {
  const navRef = useRef();
  const listRef = useRef();
  const navBtn = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("open-nav2");
    listRef.current.classList.toggle("nav-list-open2");
    navBtn.current.classList.toggle("mobile-close2");
  };

  return (
    <nav className="navBody2">
      <CleaningLogo />
      <div ref={navRef} className="linksContainer2">
        <ul ref={listRef} className="nav__list2 ">
          <li>
            <NavLink className="navLink2" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink2" to="/cleaningservices">
              Our Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink2" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="navLink2" to="/">
              Locations
            </NavLink>
          </li>
          <li>
            <a
              href="https://dejialaka.typeform.com/to/xPB9kKax"
              className="navBtn2"
            >
              Contact Our Experts
            </a>
          </li>
        </ul>
      </div>
      <button
        onClick={showNavbar}
        ref={navBtn}
        className="mobile-button2 mobile-open2"
      >
        <img
          className="mobile-open-btn2"
          src="/images/menu.svg"
          alt="burger menu"
        ></img>
        <img
          className="mobile-close-btn2"
          src="/images/close.svg"
          alt="close menu"
        ></img>
      </button>
    </nav>
  );
}

export default CleaningNav;
