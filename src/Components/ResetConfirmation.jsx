import React from "react";
import { NavLink } from "react-router-dom";

const ResetConfirmation = () => {
  return (
    <>
      <div className="jt-auth-page">
        <div className="jt-auth">
          <NavLink to="/login" className="jt-auth-back">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M13 8H3M7 4 3 8l4 4" />
            </svg>
            Back to Sign In
          </NavLink>
          <section className="jt-auth-card">
            <span className="jt-auth-badge jt-auth-badge-ok" aria-hidden="true">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="14" height="10" rx="1.5" />
                <path d="m3.5 6 6.5 5 6.5-5" />
              </svg>
            </span>
            <div className="jt-auth-intro">
              <h2>Reset Password email has been sent</h2>
            </div>
            <ol className="jt-steps">
              <li>Open the email from Job Tracker.</li>
              <li>Click the reset link and choose a new password.</li>
              <li>Sign in with your new password.</li>
            </ol>
            <p className="jt-auth-hint">
              Not there after a few minutes? Check your spam folder.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default ResetConfirmation;
