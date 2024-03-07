import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Footer.css";

function Footer() {
  const location = useLocation();

  const handleScroll = (event) => {
    event.preventDefault();
  
    const topContainer = document.getElementById("top");
    if (topContainer) {
      topContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer-links" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "1rem", marginTop: "16px" }}>CONNECT</p>
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
        </ul>
        <ul>
          <li className="footer-links" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "1rem", marginTop: "16px" }}>USEFUL LINKS</p>
          </li>
          <li className="footer-links">
            <a href="./">Home</a>
          </li>
          <li className="footer-links" style={{ marginBottom: "4px" }}>
            <a href="#top" onClick={handleScroll}>
              Back to Top
            </a>
          </li>
        </ul>
      </nav>
      <div>
      <p
        className="divider footer-links text-center"
        style={{ paddingTop: "36px" }}
      >
        Copyright &copy; 2024 Joseph Foster
      </p>
      </div>
    </footer>
  );
}

export default Footer;
