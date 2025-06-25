import React from "react";
import SignOut from "./SignOut";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { useEffect } from "react";

const NavBar = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 715 && mobile) {
        setMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [mobile]); // 🔁 depend on `mobile`
  const mobileSelect = () => {
    setMobile(false);
  };

  const handeMobile = () => {
    setMobile((prev) => !prev);
  };
  const linkClass = ({ isActive }) =>
    isActive ? "navbar-list-items-active" : "navbar-list-items";
  return (
    <>
      <nav className="navbar">
        <span className="navbar-logo">
          <h1 className="navbar-title">Job Tracker</h1>
        </span>
        <div className="hamburger-menu" onClick={handeMobile}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
            />
          </svg>
        </div>
        {mobile && <MobileNav onClick={mobileSelect} />}
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
