import React from "react";

const OfferCount = ({ count }) => {
  return (
    <>
      <div className="total-container ">
        <h2 className="total-applications">
          {count.filter((item) => item.status == "offer").length}
        </h2>
        <p>Offers</p>
      </div>
    </>
  );
};

export default OfferCount;
