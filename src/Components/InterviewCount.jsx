import React from "react";

const InterviewCount = ({ count }) => {
  return (
    <>
      <div className="total-container ">
        <h2 className="total-applications">
          {count.filter((item) => item.status == "interview").length}
        </h2>
        <p>Interviews</p>
      </div>
    </>
  );
};

export default InterviewCount;
