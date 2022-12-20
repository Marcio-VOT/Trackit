import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginContext } from "../contexts/UserData";

export default ({ setAddHabit, setNewHabit, newHabit }) => {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const dayList = [0, 1, 2, 3, 4, 5, 6];

  const { config } = useContext(LoginContext);

  function clearCreation(e) {
    e.preventDefault();
    setName("");
    setDays([]);
    setAddHabit(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promisse = axios.post(URL, { name, days }, config);
    promisse.then((a) => {
      console.log(a.data);
      setNewHabit(!newHabit);
    });
    promisse.catch((err) => console.log(err.response.data.message));
  }

  return (
    <CreationStyle>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            required
            placeholder="nome do hábito"
            type="text"
            name="habitName"
            id="habitName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ButtonGoup>
            {dayList.map((a) => (
              <DaysList day={a} days={days} setDays={setDays} />
            ))}
          </ButtonGoup>
          <ButtonGoupI>
            <button className="calcel" onClick={(e) => clearCreation(e)}>
              Cancelar
            </button>{" "}
            <button className="save" type="submit">
              Salvar
            </button>
          </ButtonGoupI>
        </form>
      </div>
    </CreationStyle>
  );
};
const ButtonGoup = styled.div`
  display: flex;
  margin-left: 5%;
  margin-top: 8px;
`;
const ButtonGoupI = styled.div`
  display: flex;
  margin-right: 5%;
  justify-content: end;
  margin-top: 29px;
`;
const CreationStyle = styled.div`
  width: 90%;
  height: 180px;
  margin-top: 18px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 5%;
  input {
    width: 90%;
    margin-left: 5%;
    height: 45px;
    margin-top: 5%;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    /* identical to box height */

    color: #dbdbdb;
  }

  .save {
    width: 84px;
    height: 35px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    /* identical to box height */
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border-style: none;

    text-align: center;

    color: #ffffff;
  }
  .calcel {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    /* identical to box height */
    border-style: none;
    text-align: center;
    background-color: transparent;
    margin-right: 23px;

    color: #52b6ff;

    text-align: center;
  }
`;

function DaysList({ day, days, setDays }) {
  function daySelection(a, e) {
    e.preventDefault();
    days.includes(a)
      ? setDays(days.filter((d) => !(a === d)))
      : setDays([...days, a]);
  }
  let dayL = "";
  switch (day) {
    case 0:
      dayL = "D";
      break;
    case 1:
      dayL = "S";
      break;
    case 2:
      dayL = "T";
      break;
    case 3:
      dayL = "Q";
      break;
    case 4:
      dayL = "Q";
      break;
    case 5:
      dayL = "S";
      break;
    case 6:
      dayL = "S";
      break;
  }
  return <DayButton onClick={(e) => daySelection(day, e)}>{dayL}</DayButton>;
}
const DayButton = styled.button`
  margin-right: 4px;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  /* identical to box height */

  color: #dbdbdb;
`;
