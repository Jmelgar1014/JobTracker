import React from "react";

const DropDown = ({ status, onChange }) => {
  return (
    <>
      <select name="status" id="status" value={status} onChange={onChange}>
        <option value="applied">Applied</option>
        <option value="interview">Interview</option>
        <option value="offer">Offer</option>
        <option value="rejected">Rejected</option>
      </select>
    </>
  );
};

export default DropDown;
