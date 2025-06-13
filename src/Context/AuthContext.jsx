import { createContext, useState, useEffect, useContext } from "react";
import supabase from "../../supaBaseData";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [sessiond, setSessiond] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSessiond(session);
      setLoading(false);
    };

    getSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setSessiond(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        sessiond,
        token: sessiond?.access_token,
        loading,
        user: sessiond?.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
