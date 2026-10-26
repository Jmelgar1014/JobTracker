import React from "react";

const Stat = ({ statDesc, jobs, statName, children }) => {
  return (
    <>
      <div className="jt-panel jt-card">
        <div className="jt-card-top">
          <span className="jt-card-label">{statName}</span>
          <span className="jt-card-ico" aria-hidden="true">
            {children}
          </span>
        </div>
        <div className="jt-card-value">{jobs}</div>
        <p className="jt-card-note">{statDesc}</p>
      </div>
    </>
  );
};

export default Stat;
