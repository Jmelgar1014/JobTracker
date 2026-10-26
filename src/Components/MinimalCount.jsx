import React from "react";

const MinimalCount = ({ count }) => {
  return (
    <>
      <div className="count-container">
        <section className="jt-panel jt-summary" aria-label="Summary">
          <div className="jt-stats">
            <div className="jt-stat">
              <span className="jt-stat-label">Total Applications</span>
              <span className="jt-stat-value">{count.length}</span>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default MinimalCount;
