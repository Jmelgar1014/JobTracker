import React from "react";
import { useNavigate } from "react-router-dom";
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

  const handleSubmit = (e) => {
    e.preventDefault();

    signIn(email, password);
  };

  return (
    <>
      <div className="card-container ">
        <div className="card component-shadow">
          <div className="card-title">
            <h3>Sign In</h3>
            <p>Enter your credentials to access your account</p>
          </div>
          <div className="login-form">
            <form action="">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <button onClick={handleSubmit}>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginCard;
