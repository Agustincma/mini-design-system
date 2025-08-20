import React from "react";
import "./button.css";

const Button = ({ label, onClick }) => (
  <button className="btn" onClick={onClick}>
    {label}
  </button>
);

export default Button;
