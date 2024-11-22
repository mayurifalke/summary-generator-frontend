import React from "react";
import { IoMdSettings } from "react-icons/io";

function Navbar() {
  return (
    <div className="container-fluid">
      <header className="heading d-flex justify-content-between align-items-center p-3">
        <div>vbn</div>
          <button type="button" className="btn btn-primary">
            Sign-out
          </button>
        
      </header>
    </div>
  );
}

export default Navbar;
