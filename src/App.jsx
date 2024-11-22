import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Sidebar />
      <div className="content">
        {/* <Navbar /> */}
        <div className="home-content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

export default App;
