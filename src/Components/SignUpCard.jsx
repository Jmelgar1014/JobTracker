import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../../supaBaseData";

// Create a single supabase client for interacting with your database

const SignUpCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signUp(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (data.user) {
      navigate("/verify");
    }

    if (error) {
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    signUp(email, password);
  };
  const linkClass = ({ isActive }) =>
    isActive ? "jt-switch-link jt-switch-link-active" : "jt-switch-link";

  return (
    <>
      <div className="jt-auth-card">
        <div className="jt-switch">
          <NavLink to="/login" className={linkClass}>
            Sign In
          </NavLink>
          <NavLink to="/signup" className={linkClass}>
            SignUp
          </NavLink>
        </div>
        <p className="jt-auth-card-desc">
          Fill in your information to create an account
        </p>
        <form className="jt-auth-form" action="">
          <div className="jt-auth-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="jt-auth-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="jt-auth-btn" onClick={handleSubmit}>
            Sign Up
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
        </form>
      </div>
    </>
  );
};

export default SignUpCard;
