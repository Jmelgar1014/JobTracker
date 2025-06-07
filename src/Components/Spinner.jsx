import React from "react";
import { PulseLoader } from "react-spinners";

const Spinner = () => {
  return (
    <>
      <div className="spinner-container">
        <div className="spinner">
          <PulseLoader color="#2563eb" margin={8} size={26} />
        </div>
      </div>
    </>
  );
};

export default Spinner;
