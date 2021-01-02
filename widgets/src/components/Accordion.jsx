import React from "react";

const Accordion = (props) => {
  const renderedItems = props.items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className='title active' onClick={() => console.log("Clicked item", index)}>
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className='content active'>
          <p>{item.description}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className='ui styled accordion'>{renderedItems}</div>;
};

export default Accordion;
