import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faSearch,
  faPaperclip,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Candidates/Candidates.css";
import imag1 from "../../assets/image2.png";
import imag3 from "../../assets/image3.png";
import imag6 from "../../assets/image6.png";
import imag5 from "../../assets/image5.png";
import logo from "../../assets/logo2.png";
const Candidates = () => {
  const steps = [
    {
      id: "01",
      title: "Sign up",
      description:
        "Create your profile to get started on finding your dream job.",
      icon: faArrowAltCircleLeft,
      image: imag1,
    },
    {
      id: "02",
      title: "Find Job",
      description:
        "Browse and search for job opportunities that match your skills and interests.",
      icon: faSearch,
      image: imag6,
    },
    {
      id: "03",
      title: "Get Matched",
      description:
        "Receive personalized job recommendations based on your profile.",
      icon: faPaperclip,
      image: imag3,
    },
    {
      id: "04",
      title: "Get Hired",
      description:
        "Apply for jobs and connect with potential employers to secure your next role.",
      icon: faUserCircle,
      image: imag5,
    },
  ];

  return (
    <section className="candidates">
      <div style={{ padding: "24px 0px" }}>
        <h2>
          <img src={logo} style={{ marginRight: "20px" }} />
          How It Works
        </h2>
        <h3>For Candidates</h3>
      </div>
      <div className="candidates__container">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`candidates_card ${
              step.id === "04" ? "reverse-layout" : ""
            }`}
          >
            <div className="candidates-placeholder">
              <img
                src={step.image}
                alt={`${step.title} illustration`}
                className="candidates-image"
              />
            </div>
            <div className="candidates-card-content">
              <div className="candidates-card-icon">
                <span style={{ fontSize: "24px" }}>{step.id}</span>
                <FontAwesomeIcon
                  icon={step.icon}
                  size="1x"
                  className="fa-regular candidates-icon"
                />
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Candidates;
