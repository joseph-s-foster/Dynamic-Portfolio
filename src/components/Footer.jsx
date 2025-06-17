import "../Footer.css";

function Footer() {
  const handleScroll = (event) => {
    event.preventDefault();

    // First scroll triggers UI changes (like Safari showing address bar)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Second scroll ensures final position once UI settles
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto", // instant correction
      });
    }, 500); // Tweak this based on your testing (400–600ms tends to work well)
  };

  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer-links" style={{ textDecoration: "none" }}>
            <p>CONNECT</p>
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
            <p style={{ marginTop: "16px" }}>RESOURCES</p>
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
          <li className="footer-links">
            <a
              href="https://www.svgrepo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SVG Repo
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-links" style={{ textDecoration: "none" }}>
            <p style={{ marginTop: "16px" }}>USEFUL LINKS</p>
          </li>
          <li className="footer-links">
            <a href="./">Home</a>
          </li>
          <li className="footer-links">
            <a href="#top" onClick={handleScroll}>
              Back to Top - test
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
          Joseph Foster &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
