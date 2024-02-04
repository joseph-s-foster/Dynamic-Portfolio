import { Outlet } from "react-router-dom";
import Nav from "./components/NavBar";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  return (
    <>
      <main className="main-container">
        <Nav />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;