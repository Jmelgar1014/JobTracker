import React from "react";

const InterviewPercentage = ({ percentage, count, jobs }) => {
  return (
    <>
      <div className="percent-container">
        <div className="percent">
          <h4 className="interview-percent">{percentage}%</h4>
          <p>Interview Rate </p>
        </div>
        <div className="percent-text">
          <p>
            {count} out of {jobs} applications led to interviews
          </p>
        </div>
      </div>
    </>
  );
};

export default InterviewPercentage;
