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
      <h2>
        Meus hábitos
        <span>
          <ion-icon
            onClick={() => setAddHabit(!addHabit)}
            name="add-outline"
          ></ion-icon>
        </span>
      </h2>
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
  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 18px;
    margin-left: 18px;
    margin-top: 22px;

    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */

    color: #126ba5;
  }
  span > ion-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    /* identical to box height */

    text-align: center;

    color: #ffffff;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    margin-right: 18px;
    margin-left: 18px;
    margin-top: 22px;
    color: #666666;
  }
`;
