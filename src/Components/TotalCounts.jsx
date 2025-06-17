import React from "react";
import InterviewCount from "./InterviewCount";
import OfferCount from "./OfferCount";
import ApplicationCount from "./ApplicationCount";

const TotalCounts = ({ count }) => {
  return (
    <>
      <div className="count-container">
        <div className="total-counts">
          <div className="total-count-items count-shadows">
            <h2 className="total-applications application-count">
              {count.length}
            </h2>
            <p>Total Applications</p>
          </div>
          <div className="total-count-items count-shadows">
            <h2 className="total-applications applied-count">
              {count.filter((item) => item.status == "applied").length}
            </h2>
            <p>Applied</p>
          </div>
          <div className="total-count-items count-shadows">
            <h2 className="total-applications interview-count">
              {count.filter((item) => item.status == "interview").length}
            </h2>
            <p>Interviews</p>
          </div>
          <div className="total-count-items count-shadows">
            <h2 className="total-applications offer-count">
              {count.filter((item) => item.status == "offer").length}
            </h2>
            <p>Offers</p>
          </div>
          <div className="total-count-items count-shadows">
            <h2 className="total-applications rejected-count">
              {count.filter((item) => item.status == "rejected").length}
            </h2>
            <p>Rejected</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalCounts;
