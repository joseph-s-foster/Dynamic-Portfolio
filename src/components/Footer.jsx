import "../Footer.css";

function Footer() {

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
          <li className="footer-links" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "1rem"}}>CONNECT</p>
          </li>
          <li className="footer-links">
            <a
              href="https://github.com/joseph-s-foster"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="footer-links">
            <a
              href="https://www.linkedin.com/in/joseph-foster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-links" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "1rem", marginTop: "16px" }}>RESOURCES</p>
          </li>
          <li className="footer-links">
            <a
              href="https://the-winter.github.io/codingjs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodingJS
            </a>
          </li>
          <li className="footer-links">
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              W3
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-links" style={{ textDecoration: "none" }}>
            <p style={{ fontSize: "1rem", marginTop: "16px" }}>USEFUL LINKS</p>
          </li>
          <li className="footer-links">
            <a href="./">Home</a>
          </li>
          <li className="footer-links">
            <a href="#top" onClick={handleScroll}>
              Back to Top
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <p
          className="divider footer-links text-center"
          style={{
            paddingTop: "32px",
            paddingBottom: "16px",
          }}
        >
          &copy; {new Date().getFullYear()} Joseph Foster
        </p>
      </div>
    </footer>
  );
}

export default Footer;
