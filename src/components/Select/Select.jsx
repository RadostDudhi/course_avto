import React from "react";

import "./select.scss";

const Select = ({ options, defaultValue, value, onChange, label }) => {
  return (
    <div>
      <label className="select__label">{label}</label>
      <br />
      <select
        className="select__input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        defaultValue={defaultValue}
      >
        <option disabled value="">
          {defaultValue}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
