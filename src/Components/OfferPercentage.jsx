import React from "react";

const OfferPercentage = ({ percentage, count, jobs }) => {
  return (
    <>
      <div className="jt-rate">
        <div className="jt-rate-row">
          <span className="jt-rate-name">
            <i className="jt-dot jt-dot-offer" />
            Offer Rate
          </span>
          <span className="jt-rate-pct">{percentage}%</span>
        </div>
        <div className="jt-track" role="img" aria-label={`Offer Rate ${percentage}%`}>
          <div
            className="jt-fill jt-fill-offer"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="jt-rate-note">
          <b>{count}</b> out of <b>{jobs}</b> applications resulted in offers
        </p>
      </div>
    </>
  );
};

export default OfferPercentage;
