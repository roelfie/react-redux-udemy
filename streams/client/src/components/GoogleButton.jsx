import React from "react";

const GoogleButton = ({ color = "blue", onClick, label }) => {
  return (
    <button className={`ui ${color} tertiary button`} onClick={onClick}>
      <i className='google icon'></i>
      {label}
    </button>
  );
};

export default GoogleButton;
