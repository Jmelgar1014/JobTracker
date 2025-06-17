import React from "react";

const SuccessPercentage = ({ percentage, count, jobs }) => {
  return (
    <>
      <div className="percent-container">
        <div className="percent">
          <h4 className="success-percent">{percentage}%</h4>
          <p>Success Rate </p>
        </div>
        <div className="percent-text">
          <p>
            {count} out of {jobs} applications were successful
          </p>
        </div>
      </div>
    </>
  );
};

export default SuccessPercentage;
