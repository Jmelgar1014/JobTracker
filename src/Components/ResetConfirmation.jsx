import React from "react";

const ResetConfirmation = () => {
  return (
    <>
      <div className="verify-page-container">
        <div className="verify-card component-shadow">
          <div className="reset-title">
            <div className="verify-logo">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zM20 8l-7.475 4.675q-.125.075-.262.113t-.263.037t-.262-.037t-.263-.113L4 8v10h16zm-8 3l8-5H4zM4 8v.25v-1.475v.025V6v.8v-.012V8.25zv10z"
                />
              </svg>
            </div>
            <h2 className="reset-h2">Reset Password email has been sent</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetConfirmation;
