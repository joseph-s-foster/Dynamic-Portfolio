import "../Footer.css";

function Footer() {
  const handleScroll = (event) => {
    event.preventDefault();
    const topContainer = document.getElementById("top");
    topContainer.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer-group">Connect</li>
          <li>
            <a
              className="footer-link"
              href="https://github.com/joseph-s-foster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="footer-link"
              href="https://www.linkedin.com/in/joseph-foster/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-group">Powered by</li>
          <li>
            <a
              className="footer-link"
              href="https://www.heroku.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Heroku
            </a>
          </li>
          <li>
            <a
              className="footer-link"
              href="https://www.netlify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-group">Resources</li>
          <li>
            <a
              className="footer-link"
              href="https://doc.wikimedia.org/generated-data-platform/aqs/analytics-api/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Analytics API
            </a>
          </li>
          <li>
            <a
              className="footer-link"
              href="https://www.svgrepo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Graphics
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-group">Useful links</li>
          <li>
            <a className="footer-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="footer-link" href="#top" onClick={handleScroll}>
              Back to top
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <p className="divider">
          Joseph Foster &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
