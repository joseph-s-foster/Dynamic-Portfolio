import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const fadeIn = (WrappedComponent) => {
  return (props) => {
    const location = useLocation();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    useEffect(() => {
      if (isMounted) {
        setTimeout(() => {
          setFadeClass("main-container fade-in");
        }, 10);
      }
    }, [isMounted, location]);

    const [fadeClass, setFadeClass] = useState("main-container fade-out");

    return (
      <div className={fadeClass}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default fadeIn;
