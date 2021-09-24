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
                  <Link className={style.nav_link} to="#">
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
              <div className="navbar_icons_wrapper">
                <span className={`${style.navbar_icons} pe-4`}>
                  <Link to="#"  className={style.icon_link}>
                    <SearchIcon color="action" className={style.icons} />
                  </Link>
                </span>
                <span className={`${style.navbar_icons} pe-4`}>
                  <Link to="#" className={style.icon_link}>
                    <ShoppingCartIcon color="action" className={style.icons} />
                  </Link>
                </span>
                <span className={`${style.navbar_icons} pe-4`}>
                  <Link to="#"  className={style.icon_link}>
                    <PermIdentityIcon color="action" className={style.icons} />
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
