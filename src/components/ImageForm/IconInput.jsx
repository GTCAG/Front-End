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
    <div className={`icon-input-container` + (disabled ? " disabled" : "")}>
      <i className={iconClass}></i>
      <input
        className="icon-input"
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
