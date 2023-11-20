import React from "react";

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
          src="/src/assets/project/github.png"
          alt="GitHub Logo"
          className="footer-icon"
        />
      </a>
    </footer>
  );
}

export default Footer;
