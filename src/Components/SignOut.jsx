import React from "react";
import supabase from "../../supaBaseData";
import { useNavigate } from "react-router-dom";

const SignOut = () => {
  const navigate = useNavigate();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log(error);
    }
    navigate("/login");
  }
  return (
    <div>
      <a className="" onClick={signOut}>
        Sign out
      </a>
    </div>
  );
};

export default SignOut;
