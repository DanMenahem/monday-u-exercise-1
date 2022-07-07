import React from "react";
import "./Button.css";

const Button = ({ text, type, disabled = false, handleClick }) => {
  return (
    <button
      className="button"
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
