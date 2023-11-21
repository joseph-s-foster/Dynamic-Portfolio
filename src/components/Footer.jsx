import React from "react";
import * as projectImages from "../assets/index.js";
import "../Footer.css";

function Footer() {
  return (
    <footer className="footer text-center">
      <a
        href="https://github.com/joseph-s-foster"
        target="_blank"
        rel="noopener noreferrer"
        className="cat"
      >
        <img
          src={projectImages.github}
          alt="GitHub Logo"
          className="footer-icon"
        />
      </a>
      &copy; Joe Foster 2023
    </footer>
  );
}

export default Footer;
