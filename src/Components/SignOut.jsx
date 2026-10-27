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
      <a onClick={signOut} className="jt-signout">
        <svg
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 2.5H3.5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1H6M10.5 11 13.5 8l-3-3M13.5 8H6" />
        </svg>
        <span>Sign out</span>
      </a>
    </div>
  );
};

export default SignOut;
