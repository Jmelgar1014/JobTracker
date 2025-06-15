import React from "react";

const Stat = ({ percentage, percentageName }) => {
  return (
    <>
      <div className="count-items count-shadows ">
        <h2 className="total-applications">{percentage} %</h2>
        <p>{percentageName}</p>
      </div>
    </>
  );
};

export default Stat;
