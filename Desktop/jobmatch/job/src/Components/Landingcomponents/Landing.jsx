import React, { useEffect, useState } from "react";
import "../../styles/Landing/Landing.css";
import Button from "../CommonComponents/Button";
import landing from "../../assets/landing.png";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
import profileImage from "../../assets/usertestimonials.png";
import status from "../../assets/status.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faBriefcase } from "@fortawesome/free-solid-svg-icons";

function Landing() {
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
    <div className="main-landing-container">
      <div className="content-left">
        <h1>Find your Dream Job or Perfect Candidate</h1>
        <p>Connecting job seekers and employers made easy and comprehensive.</p>
        <Button
          label={
            <span className="btn-span">
              Join us now
              <FontAwesomeIcon
                icon={faArrowRight}
                className="btn-icon"
                size="1x"
                style={{ backgroundColor: "transparent" }}
              />
            </span>
          }
          className="custom-button landing-button"
        />
        <div className="span">
          <div className="active-line">
            <h5>Active Users</h5>
            <hr className="line"></hr>
          </div>
          <p style={{ width: "50%" }} className="active-users">
            Over 100k satisfied and happy users around the world
          </p>
          <div>
            <img src={user1} className="landing-user" alt="User 1" />
            <img src={user2} className="landing-user" alt="User 2" />
            <img src={user3} className="landing-user" alt="User 3" />
            <img src={user4} className="landing-user" alt="User 4" />
          </div>
        </div>
      </div>
      <div className="content-right">
      <div className="landing-img">
          <img src={landing} alt="Landing" />
        </div>

        <div
          className="small-landing-card card-top-right"
          style={{ padding: "10px 24px" }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            
            
            <div className="card-content">
              <p className="card-content-top">100K+</p>
              <p>People got hired</p>
            </div>
            <FontAwesomeIcon icon={faBriefcase} className="icon" />
          </div>
        </div>

        <div className="small-landing-card card-bottom-left">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <img
              src={profileImage}
              alt="Profile"
              className="card-profile-image"
              style={{
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                border: "2px solid var(--primary-color)",
              }}
            />
            <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
              <div className="card-bars"></div>
              <div className="card-content">
                <p className="main-p">Alphose Sibomana</p>
                <p className="second-p">Lead Engineer at CSR</p>
                <p className="third-p">
                  <span>"</span>Great Platform for the job seeker that searching
                  for new career opportunities
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
