import { Outlet } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";

function App() {
  useScrollToTop();
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
