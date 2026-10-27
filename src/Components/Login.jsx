import React from "react";
import LoginTitle from "./LoginTitle";
import LoginCard from "./LoginCard";

const Login = () => {
  return (
    <>
      <div className="jt-auth-page">
        <div className="jt-auth">
          <LoginTitle />
          <LoginCard />
          <p className="jt-auth-legal">
            Your applications are private to your account.
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
