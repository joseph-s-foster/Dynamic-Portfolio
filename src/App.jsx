import { Outlet } from "react-router-dom";
import ScrolltoTop from "./components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  return (
    <div>
      <ScrolltoTop />
      <Outlet />
    </div>
  );
}

export default App;
