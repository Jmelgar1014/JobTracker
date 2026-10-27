import React from "react";
import { useState } from "react";
import supabase from "../../supaBaseData";
import ResetConfirmation from "./ResetConfirmation";
import { NavLink } from "react-router-dom";

const ResetCard = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  async function resetEmail(email) {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: "https://apptracking.netlify.app/newpassword",
    });

    if (data) {
      console.log("email was");
    } else if (error) {
      console.log(error);
    }
  }

  const submitEmail = async (e) => {
    e.preventDefault();

    await resetEmail(email);
    setEmailSent(true);
  };
  return (
    <>
      {!emailSent ? (
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
              <span className="jt-auth-badge" aria-hidden="true">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="9" width="12" height="8" rx="1.5" />
                  <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
                  <circle cx="10" cy="13" r="1" />
                </svg>
              </span>
              <div className="jt-auth-intro">
                <h2>Forgot Password?</h2>
                <p>No worries, we'll send you reset instructions</p>
              </div>
              <div className="jt-auth-form">
                <div className="jt-auth-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button className="jt-auth-btn" onClick={submitEmail}>
                  Send Email
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </button>
              </div>
              <div className="jt-auth-divider" />
              <p className="jt-auth-alt">
                Remembered it? <NavLink to="/login">Sign in</NavLink>
              </p>
            </section>
          </div>
        </div>
      ) : (
        <ResetConfirmation />
      )}
    </>
  );
};

export default ResetCard;
