import React from "react";

const NavBar = () => {
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
      </nav>
    </>
  );
};

export default NavBar;
