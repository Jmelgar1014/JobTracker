import React from "react";
import SignUpCard from "../Components/SignUpCard";
import SignUpTitle from "../Components/SignUpTitle";
import LoginNavBar from "../Components/LoginNavBar";

const SignUpPage = () => {
  return (
    <>
      <LoginNavBar />
      <SignUpTitle />
      <SignUpCard />
    </>
  );
};

export default SignUpPage;
