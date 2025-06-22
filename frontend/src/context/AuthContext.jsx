/* eslint-disable no-unused-vars */
import { json } from "express";
import { createContext, useContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
