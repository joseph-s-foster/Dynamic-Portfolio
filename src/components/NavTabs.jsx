import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <header className="header d-flex align-items-center justify-content-center flex-column">
      <h1 className="mb-0">
        <Link to="/" className="nav-link-header">
          Joe Foster
        </Link>
      </h1>
      {/* nav-tabs */}
      <ul className="nav">
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="white-line" style={{ width: '98%', height: '1px', backgroundColor: 'white', marginTop: '4px' }}></div>
    </header>
  );
}

export default NavTabs;