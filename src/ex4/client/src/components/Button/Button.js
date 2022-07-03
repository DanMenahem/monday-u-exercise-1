import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

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

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
