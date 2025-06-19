import React from "react";
import { useState, useEffect } from "react";
import supabase from "../../supaBaseData";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  useEffect(() => {
    const exchange = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession(
        window.location.href
      );
      if (error) {
        console.error("Session exchange failed");
      }
    };

    exchange();
  }, []);

  const handlePassword = async () => {
    const { data, error } = await supabase.auth.updateUser({ password });

    if (error) {
      alert("There was an error updating your password");
    } else {
      alert("Your password has been successfully updated");
      navigate("/login");
    }
  };

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
            <h2 className="reset-h2">Enter New Password</h2>
          </div>
          <div className="login">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" id="reset-btn" onClick={handlePassword}>
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
