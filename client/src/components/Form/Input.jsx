import React from "react";
import "./Input.scss";

const Input = ({ label, name, onChange }) => {
  return (
    <div className="input">
      <label>{label}</label>
      <input onChange={onChange} name={name}></input>
    </div>
  );
};

export default Input;
