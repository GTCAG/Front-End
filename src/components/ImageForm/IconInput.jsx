import React from "react";

const IconInput = ({
  disabled,
  onChange,
  value,
  placeholder,
  type,
  name,
  iconClass
}) => {
  return (
    <div className={`icon-input` + (disabled ? " disabled" : "")}>
      <i className={iconClass}></i>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default IconInput;
