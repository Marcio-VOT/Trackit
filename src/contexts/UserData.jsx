import React, { useState, createContext } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [token, setToken] = useState("babalu");

  return (
    <LoginContext.Provider
      value={{ name, setName, image, setImage, token, setToken }}
    >
      {children}
    </LoginContext.Provider>
  );
};
