import React from "react";

const Input = ({ type, onChange, className, value, placeholder }) => {
  return (
    <input
      type={type}
      onChange={onChange}
      className={className}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
