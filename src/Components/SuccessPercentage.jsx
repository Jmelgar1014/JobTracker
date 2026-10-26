import React from "react";

const SuccessPercentage = ({ percentage, count, jobs }) => {
  return (
    <>
      <div className="jt-rate">
        <div className="jt-rate-row">
          <span className="jt-rate-name">
            <i className="jt-dot jt-dot-success" />
            Success Rate
          </span>
          <span className="jt-rate-pct">{percentage}%</span>
        </div>
        <div className="jt-track" role="img" aria-label={`Success Rate ${percentage}%`}>
          <div
            className="jt-fill jt-fill-success"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="jt-rate-note">
          <b>{count}</b> out of <b>{jobs}</b> applications were successful
        </p>
      </div>
    </>
  );
};

export default SuccessPercentage;
