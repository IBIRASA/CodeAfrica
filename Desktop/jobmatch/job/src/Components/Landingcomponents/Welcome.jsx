import React from "react";
import "../../styles/Welcome/Welcome.scss";
import user6 from "../../assets/user6.png";
import user7 from "../../assets/user7.png";
import image1 from "../../assets/image1.png";
import spotify from "../../assets/spotify.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faClock,
  faGlobe,
  faSuitcase,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo2.png";

function Welcome() {
  return (
    <div className="main-content-welcome">
      <div className="content-left">
        <p>
          <img
            src={logo}
            style={{ marginRight: "20px", width: "25.66px", height: "26.1px" }}
            className="csr-logo"
          />
          Welcome to CSR Jobmatch,
        </p>
        <h3>Where we bridge the gap between job seekers and employers</h3>
        <p className="paragraph2">
          Discover your next career opportunity or find the ideal candidate with
          ease.
        </p>
      </div>

      <div className="content-right">
        <div className="grid-container">
          <div className="container">
            <div className="red">
              <img src={user6} className="main-image" />
            </div>
            <div className="stacked-divs">
              <div className="blue">
                <div className="job-card">
                  <div className="top-right-icon">
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <div className="job-info">
                    <div className="job-title">
                      <img
                        src={spotify}
                        alt="Company Logo"
                        className="company-logo"
                      />
                      <div>
                        <h4>Senior UI/UX Designer</h4>
                        <p className="company-name">Spotify • 55 Applicants</p>
                      </div>
                    </div>
                    <div className="job-tags">
                      <span className="tag">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="btn-icon"
                        />
                        Intermediate
                      </span>
                      <span className="tag">
                        <FontAwesomeIcon icon={faGlobe} className="btn-icon" />
                        Full-time
                      </span>
                      <span className="tag">
                        <FontAwesomeIcon
                          icon={faSuitcase}
                          className="btn-icon"
                        />
                        Remote
                      </span>
                    </div>
                    <div className="salary-posted">
                      <p className="salary">300K/month</p>
                      <p className="posted-time">
                        <FontAwesomeIcon
                          icon={faClock}
                          className="btn-icon"
                          style={{ marginRight: "8px" }}
                        />
                        Posted 1 hr ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="green">
                <img src={user7} alt="Small Image 2" className="small-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
