import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-4 shadow-lg bg-transparent">
          <div className={style.container}>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse d-flex justify-content-between align-items-center"
              id="navbarSupportedContent"
            >
              <div className="logo">
                <Link className="navbar-brand" to="#">
                  GHARDARI
                </Link>
              </div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active pe-3">
                  <Link className={style.nav_link} to="/home">
                    <strong> Home </strong>
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link className={style.nav_link} to="#">
                    Shop
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link className={style.nav_link} to="#">
                    About Us
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link className={style.nav_link} href="#">
                    Jewelry
                  </Link>
                </li>
                <li className="nav-item pe-3">
                  <Link className={style.nav_link} href="#">
                    Candels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={style.nav_link} href="#">
                    Apparel
                  </Link>
                </li>
              </ul>
              <div className="navbar_icons">
                <span className="pe-4">
                  <Link to="/products/6" className={style.icons}>
                    <SearchIcon />
                  </Link>
                </span>
                <span className="pe-4">
                  <Link to="/addcart">
                    <ShoppingCartIcon />
                  </Link>
                </span>
                <span>
                  <Link to="/products/12">
                    <PermIdentityIcon />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
