import React from "react";

const Metrics = ({ children }) => {
  return (
    <>
      <div className="metric-container">
        <div className="metrics component-shadow">
          <div className="metric-title">
            <h3>Success Metrics</h3>
            <p>Your application success rates and conversion metrics</p>
          </div>
          <div className="metric-items">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Metrics;
