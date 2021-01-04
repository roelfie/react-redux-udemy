import React from "react";

const Link = ({ path, children }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return; // allow opening menu item in new browser tab.
    }

    // Prevent full page reload
    event.preventDefault();

    // Update URL
    window.history.pushState({}, "", path);

    // Publish event to trigger re-rendering of routes
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={path} className='item'>
      {children}
    </a>
  );
};

export default Link;
