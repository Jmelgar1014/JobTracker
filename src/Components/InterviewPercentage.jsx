import React from "react";

const InterviewPercentage = ({ percentage, count, jobs }) => {
  return (
    <>
      <div className="jt-rate">
        <div className="jt-rate-row">
          <span className="jt-rate-name">
            <i className="jt-dot jt-dot-interview" />
            Interview Rate
          </span>
          <span className="jt-rate-pct">{percentage}%</span>
        </div>
        <div className="jt-track" role="img" aria-label={`Interview Rate ${percentage}%`}>
          <div
            className="jt-fill jt-fill-interview"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="jt-rate-note">
          <b>{count}</b> out of <b>{jobs}</b> applications led to interviews
        </p>
      </div>
    </>
  );
};

export default InterviewPercentage;
