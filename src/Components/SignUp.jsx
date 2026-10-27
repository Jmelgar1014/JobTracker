import React from "react";
import SignUpTitle from "./SignUpTitle";
import SignUpCard from "./SignUpCard";

const SignUp = () => {
  return (
    <>
      <div className="jt-auth-page">
        <div className="jt-auth">
          <SignUpTitle />
          <SignUpCard />
          <p className="jt-auth-legal">
            Your applications are private to your account.
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
