import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <Link className="navbar-brand  mx-auto" to="/">
        <h2>Employee Directory</h2>
      </Link>
      <div>
      </div>
    </nav>
  );
}

export default Navbar;
