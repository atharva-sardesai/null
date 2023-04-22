import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border border-white ">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="/">
          NuLL
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>href="/"
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
