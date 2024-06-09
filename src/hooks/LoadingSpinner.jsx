import React, { useEffect } from "react";
import { PuffLoader } from "react-spinners";

const LoadingSpinner = () => {
  useEffect(() => {
    // disables overflow on small screens and mobile devices
    const handleResize = () => {
      if (window.innerWidth < 724) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    // applies the correct overflow setting when the component mounts
    handleResize();

    // checks and updates the overflow setting when the window is resized
    window.addEventListener("resize", handleResize);

    // resets overflow, prevents memory leaks, and ensures that the event listener does not continue to execute after the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, []);

  // centers the loader on all viewports
  return (
    <div
      className="puffLoader"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <PuffLoader size={48} color={"#dddddd"} loading={true} />
    </div>
  );
};

export default LoadingSpinner;
