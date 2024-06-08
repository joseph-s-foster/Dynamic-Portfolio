import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const fadeIn = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();
    const [fadeClass, setFadeClass] = useState("main-container");

    useEffect(() => {
      // Trigger fade-in effect
      setFadeClass("main-container fade-in");

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
