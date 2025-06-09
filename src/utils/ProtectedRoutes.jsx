import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import supabase from "../../supaBaseData";
import { useState, useEffect } from "react";

const ProtectedRoutes = () => {
  const [userAuth, setUserAuth] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUserAuth(session?.user ?? null);
      setLoading(false); // Set loading to false after check
    };

    getSession();

    // Subscribe to auth state changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUserAuth(session?.user ?? null);
        setLoading(false); // Also set loading to false on auth changes
      }
    );

    // Cleanup subscription on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // Show loading state while checking authentication
  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  return userAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
