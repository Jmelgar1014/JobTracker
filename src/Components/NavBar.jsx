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
    isActive ? "jt-nav-link jt-nav-link-active" : "jt-nav-link";
  return (
    <>
      <nav className="jt-nav">
        <span className="jt-brand">
          <span className="jt-brand-mark" aria-hidden="true">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            >
              <rect x="2" y="4.5" width="12" height="9" rx="1.5" />
              <path d="M6 4.5V3h4v1.5M2 8.5h12" />
            </svg>
          </span>
          <h1 className="jt-brand-name">Job Tracker</h1>
        </span>
        <div className="jt-menu-btn" onClick={handeMobile}>
          <svg
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" />
          </svg>
        </div>
        {mobile && <MobileNav onClick={mobileSelect} />}
        <ul className="jt-nav-links">
          <li>
            <NavLink to="/home" className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/applications" className={linkClass}>
              Applications
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className={linkClass}>
              Stats
            </NavLink>
          </li>
          <li className="jt-nav-right">
            <SignOut />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
