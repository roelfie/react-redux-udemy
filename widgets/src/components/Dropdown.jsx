import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange, defaultText }) => {
  const [open, setOpen] = useState(false);

  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null; // Tells React to not render anything.
    }
    return (
      <div className='item' key={option.key} onClick={() => onSelectedChange(option)}>
        {option.value}
      </div>
    );
  });

  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>{defaultText}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className='dropdown icon' />
          <div className='text'>{selected.value}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
