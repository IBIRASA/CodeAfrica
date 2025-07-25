import React, { useState, useEffect } from "react";
import "../../styles/Button/Button.css";
import Button from "./Button";
import "../../styles/Header/Header.css";
import logoDark from "../../assets/logo.png";
import logoLight from "../../assets/logoo.png";

function Header() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const checkTheme = () => {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDarkMode);
    };

    checkTheme();

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", checkTheme);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      darkModeMediaQuery.removeEventListener("change", checkTheme);
    };
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      data-theme={isDarkMode ? "dark" : "light"}
    >
      <div className="navbar-container">
        <a className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src={isDarkMode ? logoDark : logoLight}
            alt="Logo"
            style={{ width: "100px" }}
          />
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <div className={click ? "hamburger open" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a className="nav-links" onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={closeMobileMenu}>
              Talents
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-links" onClick={closeMobileMenu}>
              Services
            </a>
          </li>
          <li>
            <Button className="header-button" label="Join Us Now" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
