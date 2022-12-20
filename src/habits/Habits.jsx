import React, { useState } from "react";
import { Link } from "react-router-dom";
import Top from "../top/Top";
import Footer from "../footer/Footer";
import HabitCreation from "./HabitCreation";
import Habit from "./Habit";
import { useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { LoginContext } from "../contexts/UserData";
import styled from "styled-components";

export default () => {
  const [newHabit, setNewHabit] = useState(false);
  const { config, setDayHabit, setPercentage, loadDayHabit } =
    useContext(LoginContext);
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
  useEffect(() => {
    const promisse = axios.get(URL, config);
    promisse.then((a) =>
      a.data.length === 0 ? setHabitList([]) : setHabitList(a.data)
    );
    promisse.catch((err) => console.log(err.response.data.message));
  }, [newHabit]);
  const [addHabit, setAddHabit] = useState(false);
  const [habitList, setHabitList] = useState([]);
  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const promisse = axios.get(URL, config);
    promisse.then((a) => {
      const auxTotal = a.data.length;
      const auxDone = a.data.filter((a) => a.done === true).length;
      setDayHabit(a.data);
      setPercentage(((auxDone * 100) / auxTotal).toFixed(0));
    });
    promisse.catch((err) => console.log(err));
  }, []);
  return (
    <HabitsStyle>
      <Top />
      <div>
        <h1>Meus hábitos</h1>
        <h1 onClick={() => setAddHabit(!addHabit)}>+</h1>
      </div>
      {addHabit && (
        <HabitCreation
          setAddHabit={setAddHabit}
          setNewHabit={setNewHabit}
          newHabit={newHabit}
        />
      )}

      {!(habitList.length === 0) ? (
        habitList.map((a) => (
          <Habit
            key={a.id}
            name={a.name}
            days={a.days}
            id={a.id}
            setNewHabit={setNewHabit}
            newHabit={newHabit}
          />
        ))
      ) : (
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      )}
      <Footer />
    </HabitsStyle>
  );
};
const HabitsStyle = styled.div`
  height: 100%;
`;
