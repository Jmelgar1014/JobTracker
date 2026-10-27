import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import supabase from "../../supaBaseData";

// Create a single supabase client for interacting with your database

const LoginCard = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [incorrectPass, setIncorrectPass] = useState(false);

  async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (data.session) {
      setIncorrectPass(false);
      navigate("/home");
    }

    if (error) {
      setIncorrectPass(true);
      console.log(error);
    }
  }

  const forgotPasswordRedirect = () => {
    navigate("/resetpassword");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };
  const signInLink = ({ isActive }) => {
    const currentPath = location.pathname;

    const isSignInActive = isActive || currentPath === "/";

    return isSignInActive ? "jt-switch-link jt-switch-link-active" : "jt-switch-link";
  };
  const linkClass = ({ isActive }) =>
    isActive ? "jt-switch-link jt-switch-link-active" : "jt-switch-link";

  return (
    <>
      <div className="jt-auth-card">
        <div className="jt-switch">
          <NavLink to="/login" className={signInLink}>
            Sign In
          </NavLink>
          <NavLink to="/signup" className={linkClass}>
            SignUp
          </NavLink>
        </div>
        <p className="jt-auth-card-desc">
          Enter your credentials to access your account
        </p>
        <form className="jt-auth-form" onSubmit={handleSubmit}>
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
            <div className="jt-auth-label-row">
              <label htmlFor="password">Password</label>
              <button
                type="button"
                className="jt-auth-link"
                onClick={forgotPasswordRedirect}
              >
                Forgot your password?
              </button>
            </div>
            <input
              type="password"
              name="password"
              id={incorrectPass ? "incorrectPass" : "password"}
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {incorrectPass && (
              <span className="jt-auth-error">Incorrect Password</span>
            )}
          </div>
          <button type="submit" className="jt-auth-btn">
            Sign In
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

export default LoginCard;
