import React from "react";
import GlobalStyleComponent from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./loginUser/Login";
import Register from "./loginUser/Register";
import Habts from "./habits/Habits";
import DaysHabit from "./daysHabit/DaysHabit";
import { LoginProvider } from "./contexts/UserData";
import { useContext } from "react";

export default () => {
  return (
    <BrowserRouter>
      <GlobalStyleComponent />
      <LoginProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="cadastro" element={<Register />} />
          <Route path="/habitos" element={<Habts />} />
          <Route path="/hoje" element={<DaysHabit />} />
        </Routes>
      </LoginProvider>
    </BrowserRouter>
  );
};
