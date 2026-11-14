import React from "react";

const TotalCounts = ({ count = {} }) => {
  return (
    <>
      <div className="count-container">
        <section className="jt-panel jt-summary" aria-label="Summary">
          <div className="jt-stats jt-stats-5">
            <div className="jt-stat">
              <span className="jt-stat-label">Total Applications</span>
              <span className="jt-stat-value">{count.total ?? 0}</span>
            </div>
            <div className="jt-stat">
              <span className="jt-stat-label">
                <i className="jt-dot jt-dot-applied" />
                Applied
              </span>
              <span className="jt-stat-value">{count.applied ?? 0}</span>
            </div>
            <div className="jt-stat">
              <span className="jt-stat-label">
                <i className="jt-dot jt-dot-interview" />
                Interviews
              </span>
              <span className="jt-stat-value">{count.interviews ?? 0}</span>
            </div>
            <div className="jt-stat">
              <span className="jt-stat-label">
                <i className="jt-dot jt-dot-offer" />
                Offers
              </span>
              <span className="jt-stat-value">{count.offers ?? 0}</span>
            </div>
            <div className="jt-stat">
              <span className="jt-stat-label">
                <i className="jt-dot jt-dot-rejected" />
                Rejected
              </span>
              <span className="jt-stat-value">{count.rejected ?? 0}</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TotalCounts;
