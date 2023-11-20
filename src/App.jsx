import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Footer from './components/Footer'; // Import your Footer component
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
