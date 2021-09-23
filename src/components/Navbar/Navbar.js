import React from "react";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container">
          <nav className="navbar navbar-expand-lg ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon top-bar"></span>
              <span className="navbar-toggler-icon mid-bar"></span>
              <span className="navbar-toggler-icon bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item pe-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item pe-2">
                  <a className="nav-link" href="#">
                    OVER ONS
                  </a>
                </li>
                <li className="nav-item pe-2">
                  <a className="nav-link" href="#">
                    SHOP
                  </a>
                </li>
                <li className="nav-item pe-2">
                  <a className="nav-link" href="#">
                    SERVICES
                  </a>
                </li>
                <li className="nav-item pe-2">
                  <a className="nav-link" href="#">
                    BLOG
                  </a>
                </li>
                <li className="nav-item pe-2">
                  <a className="nav-link" href="#">
                    CONTACT
                  </a>
                </li>
                <a className="navbar-brand ms-4 mt-0" href="#">
                  <img src="images/logo.png" width="100px" alt="Logo" />
                </a>
              </ul>
              <span className="pb-3">
                <i className="fas fa-search px-2"></i>
                <i className="fas fa-lock px-2"></i>
                <i className="far fa-heart px-2"></i>
                <i className="fas fa-shopping-bag px-2"></i>
              </span>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
