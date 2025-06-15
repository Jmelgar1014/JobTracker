import React from "react";
import { Outlet } from "react-router-dom";
import LoginNavBar from "../Components/LoginNavBar";

const LoginLayout = () => {
  return (
    <>
      <LoginNavBar />
      <Outlet />
    </>
  );
};

export default LoginLayout;
