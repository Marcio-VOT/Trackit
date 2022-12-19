import React, { useState } from "react";
import { Link } from "react-router-dom";
import Top from "../top/Top";
import Footer from "../footer/Footer";
import HabitCreation from "./HabitCreation";
import Habit from "./Habit";

export default () => {
  const [addHabit, setAddHabit] = useState(false);
  return (
    <>
      <Top />
      <div>
        <h1>Meus hábitos</h1>
        <h1 onClick={() => setAddHabit(!addHabit)}>+</h1>
      </div>
      {addHabit && <HabitCreation setAddHabit={setAddHabit} />}
      <Habit />
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </p>
      <Footer />
    </>
  );
};
