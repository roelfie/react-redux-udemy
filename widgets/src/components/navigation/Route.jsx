import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      // This state change will cause a re-render of this component
      setCurrentPath(window.location.pathname);
    };

    // Add event listener to re-render on receival of "popstate" event (i.e. on URL change; see Link.jsx)
    window.addEventListener("popstate", onLocationChange);

    // Remove event listener when component is removed
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
