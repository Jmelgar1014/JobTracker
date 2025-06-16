import React from "react";

const Stat = ({ statDesc, jobs, statName, children }) => {
  return (
    <>
      <div className="stat-items count-shadows ">
        <div className="stat-container">
          {children}
          <div className="stat-num">{jobs}</div>
        </div>
        <div className="stat-desc">
          <h3>{statName}</h3>
        </div>
        <div className="stat-desc">
          <p>{statDesc}</p>
        </div>
      </div>
    </>
  );
};

export default Stat;
