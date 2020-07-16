import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <img
        src="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
        style={{ width: "60px" }}
        alt="github"
      />
      <Link className="navbar-brand" to="/">
        GitHub Search Engine
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2">
          <li className="nav-item">
            <Link to="/users/ahmedKing20" className="btn btn-secondary">
              About me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
