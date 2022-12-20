import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    <>
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
          {dayList.map((a) => (
            <DaysList day={a} days={days} setDays={setDays} />
          ))}
          <button onClick={(e) => clearCreation(e)}>Cancelar</button>{" "}
          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
};

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
  return <button onClick={(e) => daySelection(day, e)}>{dayL}</button>;
}
