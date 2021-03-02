import React from "react";
import "./custom-input.scss";

const CustomInput = ({ value, onChange, type, label, name, id, maxLength }) => {
  return (
    <div className="custom-input">
      <label htmlFor="fname">{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        maxLength={maxLength}
      ></input>
    </div>
  );
};

export default CustomInput;
