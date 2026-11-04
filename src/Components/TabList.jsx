import React from "react";
const TabList = ({ tabChange, filterTab }) => {
  return (
    <div className="tablist">
      <button
        type="button"
        aria-pressed={filterTab === "all"}
        onClick={() => tabChange("all")}
      >
        All
      </button>
      <button
        type="button"
        aria-pressed={filterTab === "applied"}
        onClick={() => tabChange("applied")}
      >
        Applied
      </button>
      <button
        type="button"
        aria-pressed={filterTab === "interview"}
        onClick={() => tabChange("interview")}
      >
        Interview
      </button>
      <button
        type="button"
        aria-pressed={filterTab === "offer"}
        onClick={() => tabChange("offer")}
      >
        Offer
      </button>
      <button
        type="button"
        aria-pressed={filterTab === "rejected"}
        onClick={() => tabChange("rejected")}
      >
        Rejected
      </button>
    </div>
  );
};

export default TabList;
