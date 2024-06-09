import React, { useEffect } from "react";
import { PuffLoader } from "react-spinners";

const LoadingSpinner = () => {
  useEffect(() => {
    const handleResize = () => {
      const metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (window.innerWidth < 724) {
        document.body.style.overflow = "hidden";
        if (!metaThemeColor) {
          const meta = document.createElement("meta");
          meta.name = "theme-color";
          meta.content = "#000000";
          document.head.appendChild(meta);
        } else {
          metaThemeColor.content = "#000000";
        }
      } else {
        document.body.style.overflow = "";
        if (metaThemeColor) {
          metaThemeColor.remove(); // Remove the meta tag to revert to default behavior
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
      const metaThemeColor = document.querySelector("meta[name=theme-color]");
      if (metaThemeColor) {
        metaThemeColor.remove(); // Clean up by removing the meta tag
      }
    };
  }, []);

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
