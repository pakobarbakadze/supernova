import React from "react";

import "./Button.scss";

const Button = ({ text, onClick }) => {
  return (
    <div className="btn">
      <button onClick={onClick}>{text}</button>
    </div>
  );
};

export default Button;
