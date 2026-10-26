import React from "react";

const Metrics = ({ children }) => {
  return (
    <>
      <div className="metric-container">
        <section className="jt-panel jt-metrics" aria-labelledby="jt-rates-h">
          <div className="jt-sec-head">
            <h2 id="jt-rates-h">Success Metrics</h2>
            <p>Your application success rates and conversion metrics</p>
          </div>
          <div className="jt-rates">{children}</div>
        </section>
      </div>
    </>
  );
};

export default Metrics;
