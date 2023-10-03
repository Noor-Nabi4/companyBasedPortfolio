import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  // const elementRef = useRef(null);
  const handleOnClickscroll = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCloseNav = () => {
    setOpenNav(!openNav);
  }; /* 
  const dropdownActiveClass = () => {
    if (elementRef.current) {
      elementRef.current.classList.toggle('dropdown-active');
    }
  } */
  const navbarlinksActive = () => {
    let selectHeader = document.getElementById("header");
    if (window.scrollY > 100) {
      selectHeader.classList.add("header-scrolled");
    } else {
      selectHeader.classList.remove("header-scrolled");
    }
    let position = window.scrollY + 200;
    var navbar = document.getElementById("navbar");
    var linksInNav = navbar.querySelectorAll("ul li a");
    linksInNav.forEach(function (navbarlink) {
      if (!navbarlink.hash) return;
      let element = navbarlink.hash.substring(1);
      var section = document.getElementById(element);

      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("scroll", navbarlinksActive);

  return (
    <nav id="navbar" className={` ${openNav ? "navbar-mobile" : "navbar"}`}>
      <ul>
        <li>
          <Link
            className="nav-link scrollto active"
            onClick={(e) => handleOnClickscroll("hero")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="nav-link scrollto"
            onClick={(e) => handleOnClickscroll("about")}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="nav-link scrollto"
            onClick={(e) => handleOnClickscroll("services")}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="nav-link   scrollto"
            onClick={(e) => handleOnClickscroll("portfolio")}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="nav-link scrollto"
            onClick={(e) => handleOnClickscroll("team")}
          >
            Team
          </Link>
        </li>
        {/* { <li className="dropdown" onClick={dropdownActiveClass}>
          <Link to="#">
            <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
          </Link>
          <ul ref={elementRef}>
            <li>
              <Link to="#">Drop Down 1</Link>
            </li>
            <li className="dropdown">
              <Link to="#">
                <span>Deep Drop Down</span>{" "}
                <i className="bi bi-chevron-right"></i>
              </Link>
              <ul>
                <li>
                  <Link to="#">Deep Drop Down 1</Link>
                </li>
                <li>
                  <Link to="#">Deep Drop Down 2</Link>
                </li>
                <li>
                  <Link to="#">Deep Drop Down 3</Link>
                </li>
                <li>
                  <Link to="#">Deep Drop Down 4</Link>
                </li>
                <li>
                  <Link to="#">Deep Drop Down 5</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Drop Down 2</Link>
            </li>
            <li>
              <Link to="#">Drop Down 3</Link>
            </li>
            <li>
              <Link to="#">Drop Down 4</Link>
            </li>
          </ul>
        </li>} 
        */}
        <li>
          <Link
            className="nav-link scrollto"
            onClick={(e) => handleOnClickscroll("contact")}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="getstarted scrollto"
            onClick={(e) => handleOnClickscroll("hero")}
          >
            Get Started
          </Link>
        </li>
      </ul>
      <i
        className={`bi ${openNav ? "bi-x" : "bi-list"} mobile-nav-toggle`}
        onClick={(e) => openCloseNav()}
      ></i>
    </nav>
  );
};

export default Navbar;
