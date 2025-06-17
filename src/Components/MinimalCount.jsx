import React from "react";

const MinimalCount = ({ count }) => {
  return (
    <>
      <div className="count-container">
        <div className="counts">
          <div className="count-items count-shadows">
            <h2 className="total-applications application-count">
              {count.length}
            </h2>
            <p>Total Applications</p>
          </div>

          <div className="count-items count-shadows">
            <h2 className="total-applications interview-count">
              {count.filter((item) => item.status == "interview").length}
            </h2>
            <p>Interviews</p>
          </div>
          <div className="count-items count-shadows">
            <h2 className="total-applications offer-count">
              {count.filter((item) => item.status == "offer").length}
            </h2>
            <p>Offers</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MinimalCount;
