import React from "react";
import { NavLink } from "react-router-dom";
import SignOut from "./SignOut";

const MobileNav = ({ onClick }) => {
  return (
    <>
      {/* <div className="mobileNav-container"> */}
      <nav className="mobileNav-container">
        <ul className="mobileNav">
          <li>
            <NavLink to="/home" className="" onClick={onClick}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/applications" className="" onClick={onClick}>
              Applications
            </NavLink>
          </li>
          <li>
            <NavLink to="/stats" className="a" onClick={onClick}>
              Stats
            </NavLink>
          </li>
          <li>
            <SignOut />
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </>
  );
};

export default MobileNav;
