import React from "react";

const ApplicationCount = ({ count }) => {
  return (
    <>
      <div className="total-container ">
        <h2 className="total-applications">{count.length}</h2>
        <p>Total Applications</p>
      </div>
    </>
  );
};

export default ApplicationCount;
