import React from "react";
import Link from "./Link";

const Header = ({ tabs }) => {
  const renderedTabs = tabs.map(({ path, label }) => {
    return <Link path={path}>{label}</Link>;
  });
  return (
    <div className='ui inverted segment'>
      <div className='ui inverted secondary menu'>{renderedTabs}</div>
    </div>
  );
};

export default Header;
