import React from "react";
const TabList = ({ filterTab, setFilterTab }) => {
  return (
    <div className="tablist">
      <button
        type="button"
        aria-pressed={filterTab === "all"}
        onClick={() => setFilterTab("all")}
      >
        All
      </button>
      <button
        type="button"
        aria-pressed={filterTab === "applied"}
        onClick={() => setFilterTab("applied")}
      >
        Applied
      </button>
      <button
        type="button"
        aria-pressed={filterTab === "interview"}
        onClick={() => setFilterTab("interview")}
      >
        Interview
      </button>
      <button
        type="button"
        aria-pressed={filterTab === "offer"}
        onClick={() => setFilterTab("offer")}
      >
        Offer
      </button>
      <button
        type="button"
        aria-pressed={filterTab === "rejected"}
        onClick={() => setFilterTab("rejected")}
      >
        Rejected
      </button>
    </div>
  );
};

export default TabList;
