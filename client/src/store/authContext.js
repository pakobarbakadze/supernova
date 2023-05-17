import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const login = (userData) => {
    setUserData(userData);
    localStorage.setItem("token", userData.token);
  };

  const logout = () => {
    setUserData(null);
    localStorage.removeItem("token");
  };

  const authContextValue = {
    userData,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
