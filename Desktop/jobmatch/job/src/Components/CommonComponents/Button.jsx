import React from "react";
import "../../styles/Button/Button.css";
const Button = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
