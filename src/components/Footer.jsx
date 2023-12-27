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
    position: isOverflow ? "relative" : "fixed"
  };

  return (
    <footer className="footer text-center" style={footerStyle} ref={footerRef}>
      <nav className="footer-nav">
        <ul>
          <li className="footer-links">
            <a href="mailto:joseph.s.foster@icloud.com">Email</a>
          </li>
          <li className="footer-links">
            <a href="https://github.com/joseph-s-foster">GitHub</a>
          </li>
          <li className="footer-links">
            <a href="/">Home</a>
          </li>
          <li>
            <p>&copy; 2023-2024</p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
