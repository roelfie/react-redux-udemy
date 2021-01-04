import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // Effect that is executed only on first render
  useEffect(() => {
    const onBodyClick = (event) => {
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
        // Clicked inside dropdown
        return;
      }
      // Clicked outside dropdown
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    // Remove this event listener when the dropdown is removed from the DOM
    // (or it will cause errors because the ref does not exist anymore).
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  // With capturing, the event is first captured by the outermost element and propagated to the inner elements.

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
        <label className='label'>{label}</label>
        <div
          ref={dropdownRef}
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
