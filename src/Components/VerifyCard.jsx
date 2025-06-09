import React from "react";

const VerifyCard = () => {
  return (
    <>
      <div className="verify-container">
        <div className="verify-card component-shadow">
          <div className="verify-title">
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
            <h2>Check your email</h2>
            <p>We've sent a confirmation link to your email address</p>
          </div>
          <div className="verify-steps-container">
            <div className="verify-steps">
              <div className="verify-steps-num-container">
                <div className="verify-steps-num">
                  <span>1</span>
                </div>
              </div>
              <p>Check your email inbox(and spam folder)</p>
            </div>
          </div>
          <div className="verify-steps-container">
            <div className="verify-steps">
              <div className="verify-steps-num-container">
                <div className="verify-steps-num">
                  <span>2</span>
                </div>
              </div>
              <p>Click the confirmation link in the email</p>
            </div>
          </div>
          <div className="verify-steps-container">
            <div className="verify-steps">
              <div className="verify-steps-num-container">
                <div className="verify-steps-num-check">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <p>Start tracking your job applications</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyCard;
