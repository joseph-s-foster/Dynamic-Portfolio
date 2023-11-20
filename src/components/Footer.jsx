import React from "react";
import * as projectImages from "../assets/index.js";

function Footer() {
  return (
    <footer className="footer text-center">
      &copy; Joe Foster 2023{" "}
      <a
        href="https://github.com/joseph-s-foster"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={projectImages.github}
          alt="GitHub Logo"
          className="footer-icon"
        />
      </a>
    </footer>
  );
}

export default Footer;
