import React from "react";
import InterviewCount from "./InterviewCount";
import OfferCount from "./OfferCount";
import ApplicationCount from "./ApplicationCount";

const TotalCounts = ({ count }) => {
  return (
    <>
      <div className="count-container">
        <section className="jt-panel jt-summary" aria-label="Summary">
          <div className="jt-stats jt-stats-5">
            <div className="jt-stat">
              <span className="jt-stat-label">Total Applications</span>
              <span className="jt-stat-value">{count.length}</span>
            </div>
            <div className="jt-stat">
              <span className="jt-stat-label">
                <i className="jt-dot jt-dot-applied" />
                Applied
              </span>
              <span className="jt-stat-value">
                {count.filter((item) => item.status == "applied").length}
              </span>
            </div>
            <div className="jt-stat">
              <span className="jt-stat-label">
                <i className="jt-dot jt-dot-interview" />
                Interviews
              </span>
              <span className="jt-stat-value">
                {count.filter((item) => item.status == "interview").length}
              </span>
            </div>
            <div className="jt-stat">
              <span className="jt-stat-label">
                <i className="jt-dot jt-dot-offer" />
                Offers
              </span>
              <span className="jt-stat-value">
                {count.filter((item) => item.status == "offer").length}
              </span>
            </div>
            <div className="jt-stat">
              <span className="jt-stat-label">
                <i className="jt-dot jt-dot-rejected" />
                Rejected
              </span>
              <span className="jt-stat-value">
                {count.filter((item) => item.status == "rejected").length}
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TotalCounts;
