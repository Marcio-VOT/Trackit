import axios from "axios";
import React, { useState, createContext } from "react";
import { useEffect } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [token, setToken] = useState("");
  const [loadDayHabit, setLoadDayHabit] = useState(true);
  const [dayHabit, setDayHabit] = useState([]);
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const [totalHabits, setTotalHabits] = useState(0);
  const [percentage, setPercentage] = useState(0);

  return (
    <LoginContext.Provider
      value={{
        name,
        setName,
        image,
        setImage,
        token,
        setToken,
        config,
        loadDayHabit,
        setLoadDayHabit,
        dayHabit,
        setDayHabit,
        setTotalHabits,
        totalHabits,
        percentage,
        setPercentage,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
