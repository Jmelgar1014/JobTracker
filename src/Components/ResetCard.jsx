import React from "react";
import { useState } from "react";
import supabase from "../../supaBaseData";
import ResetConfirmation from "./ResetConfirmation";

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
              <h2 className="reset-h2">Forgot Password?</h2>
              <p className="reset-desc">
                No worries, we'll send you reset instructions
              </p>
            </div>
            <div className="login">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn" id="reset-btn" onClick={submitEmail}>
                Send Email
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ResetConfirmation />
      )}
    </>
  );
};

export default ResetCard;
