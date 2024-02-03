import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Footer.css";

function Footer() {
  const location = useLocation();

  const handleScroll = (event) => {
    event.preventDefault();

    const topContainer = document.getElementById("top");
    if (topContainer) {
      topContainer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer-static" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "1ren", marginTop: ".255rem" }}>CONNECT</p>
          </li>
          <li className="footer-links">
            <a href="mailto:joseph.s.foster@icloud.com">Email</a>
          </li>
          <li className="footer-links">
            <a href="https://github.com/joseph-s-foster">GitHub</a>
          </li>
          <li className="footer-links">
            <a href="https://www.linkedin.com/in/joseph-foster/">LinkedIn</a>
          </li>
          <li className="footer-links" style={{ marginBottom: "8px" }}>
            <a href="#top" onClick={handleScroll}>
              Back to Top
            </a>
          </li>
          <li
            className="footer-static text-center"
            style={{
              justifyContent: "center",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <p className="border-top" style={{ paddingTop: "8px" }}>
              Made with ❤️ by Joe Foster &copy; 2024
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
