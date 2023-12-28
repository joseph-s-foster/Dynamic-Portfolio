import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Footer.css";

function Footer() {
  const location = useLocation();
  const footerRef = useRef(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const body = document.body;
      const hasOverflow = body.scrollHeight > window.innerHeight;
      setIsOverflow(hasOverflow);
    };

    handleResize(); // Initial check

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [location.pathname]);

  const footerStyle = {
    position: isOverflow ? "relative" : "absolute",
  };

  return (
    <footer className="footer" style={footerStyle} ref={footerRef}>
      <nav>
        <ul>
          <li className="footer-links" style={{ textDecoration: "none" }}>
            <h2 style={{ fontSize: "1.5rem" }}>Connect</h2>
          </li>
          <li className="footer-links">
            <a href="mailto:joseph.s.foster@icloud.com">Email</a>
          </li>
          <li className="footer-links">
            <a href="https://github.com/joseph-s-foster">GitHub</a>
          </li>
          <li className="footer-links">
            <a href="/">LinkedIn</a>
          </li>
          <li className="footer-links" style={{ marginBottom: "8px" }}>
            <a href="#top">Back to Top</a>
          </li>
          <li
            className="footer-links text-center"
            style={{
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <p className="border-top" style={{ paddingTop: "8px" }}>
              &copy; 2024
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
