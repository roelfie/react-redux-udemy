import React from "react";

const Header = ({ tabs }) => {
  const renderedTabs = tabs.map(({ path, label }) => {
    return (
      <a href={path} className='item'>
        {label}
      </a>
    );
  });
  return <div className='ui secondary pointing menu'>{renderedTabs}</div>;
};

export default Header;
