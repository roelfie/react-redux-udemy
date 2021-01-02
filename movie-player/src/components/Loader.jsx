import React from "react";

const Loader = (props) => {
  return (
    <div className='active dimmer'>
      <div className='text loader'>{props.text}</div>
    </div>
  );
};

Loader.defaultProps = {
  text: "Loading..."
};

export default Loader;
