import React from "react";

const Loader = (props) => {
  return (
    <div className='ui active dimmer'>
      <div className='ui text loader'>{props.text}</div>
    </div>
  );
};

Loader.defaultProps = {
  text: "Loading..."
};

export default Loader;
