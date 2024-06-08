import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const fadeIn = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();
    const [fadeClass, setFadeClass] = useState("main-container");

    useEffect(() => {
      // Check if it's the initial render
      const isFirstRender = fadeClass === "main-container";

      // If it's the first render, trigger fade-in immediately
      if (isFirstRender) {
        setFadeClass("main-container fade-in");
      } else {
        // For subsequent renders, trigger fade-in on location change
        setFadeClass("main-container");
        setTimeout(() => setFadeClass("main-container fade-in"), 0);
      }

      // Clean up by resetting the class when the component unmounts
      return () => setFadeClass("main-container");
    }, [location]);

    return (
      <div className={fadeClass}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default fadeIn;
