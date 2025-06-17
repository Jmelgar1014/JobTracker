import React from "react";

const OfferPercentage = ({ percentage, count, jobs }) => {
  return (
    <>
      <div className="percent-container">
        <div className="percent">
          <h4 className="offer-percent">{percentage}%</h4>
          <p>Offer Rate </p>
        </div>
        <div className="percent-text">
          <p>
            {count} out of {jobs} applications resulted in offers
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferPercentage;
