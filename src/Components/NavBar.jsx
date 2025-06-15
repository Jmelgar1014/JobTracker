import React from "react";
import SignOut from "./SignOut";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? "navbar-list-items-active" : "navbar-list-items";
  return (
    <>
      <nav className="navbar">
        <span className="navbar-logo">
          <h1 className="navbar-title">Job Tracker</h1>
        </span>

        <ul className="navbar-list">
          <li className="" id="nav-items">
            <NavLink to="/home" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li className="" id="nav-items">
            <NavLink to="/applications" className={linkClass}>
              Applications
            </NavLink>
          </li>
          <li id="nav-items">
            <NavLink to="/stats" className={linkClass}>
              Stats
            </NavLink>
          </li>
          <li id="nav-items">
            <SignOut />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
