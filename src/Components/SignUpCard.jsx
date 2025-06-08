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
    if (data.session) {
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
    isActive ? "navbar-list-items-active" : "navbar-list-items";

  return (
    <>
      <div className="card-container ">
        <div className="card component-shadow">
          <div className="card-title">
            <div className="card-btns">
              <NavLink to="/login" className={linkClass}>
                Sign In
              </NavLink>
              <NavLink to="/signup" className={linkClass}>
                SignUp
              </NavLink>
            </div>
            <p>Fill in your information to create an account</p>
          </div>
          <div className="login-form">
            <form action="">
              <div className="login">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login" id="password-input">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button className="login-btn" onClick={handleSubmit}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpCard;
