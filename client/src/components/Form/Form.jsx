import React from "react";
import "./Form.scss";

const Form = ({ children, onSubmit, header }) => {
  return (
    <div className="form__bg">
      <form onSubmit={onSubmit} autoComplete="off">
        <h1>{header}</h1>
        {children}
      </form>
    </div>
  );
};

export default Form;
