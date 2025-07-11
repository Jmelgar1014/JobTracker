import React from "react";

const AppIcon = () => {
  return (
    <>
      <div className="app-icon-container stat-icons">
        <div className="stat-icon">
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="appIcon"
          >
            <path
              fill="currentColor"
              d="M3 22q-.825 0-1.412-.587T1 20V9h2v11h17v2zm4-4q-.825 0-1.412-.587T5 16V5h5V3q0-.825.588-1.412T12 1h4q.825 0 1.413.588T18 3v2h5v11q0 .825-.587 1.413T21 18zm0-2h14V7H7zm5-11h4V3h-4zM7 16V7z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default AppIcon;
