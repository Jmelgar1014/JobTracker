import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../../supaBaseData";

// Create a single supabase client for interacting with your database

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data.session) {
      navigate("/home");
    }

    if (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
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
            <p>Enter your credentials to access your account</p>
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
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
              <div className="forgot-password">
                <button>Forgot your password?</button>
              </div>
              <button type="submit" className="login-btn">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
