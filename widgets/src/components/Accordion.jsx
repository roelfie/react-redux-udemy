import React, { useState } from "react";

const Accordion = (props) => {
  // Initialize state (holder & setter)
  const [activeIndex, setActiveIndex] = useState(0);

  const onTitleClick = (index) => {
    // Update state
    setActiveIndex(index);
  };

  const renderedItems = props.items.map((item, index) => {
    // Use state
    const activeStyle = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${activeStyle}`} onClick={() => onTitleClick(index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${activeStyle}`}>
          <p>{item.description}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
