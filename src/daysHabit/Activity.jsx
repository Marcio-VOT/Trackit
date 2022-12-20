import axios from "axios";
import React from "react";
import { useContext } from "react";
import { LoginContext } from "../contexts/UserData";

export default ({ id, name, done, currentSequence, highestSequence }) => {
  const { config, loadDayHabit, setLoadDayHabit } = useContext(LoginContext);
  function setDone(e) {
    let status;
    done ? (status = "uncheck") : (status = "check");
    e.preventDefault();
    console.log("entrou");
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${status}`;
    const promisse = axios.post(URL, {}, config);
    promisse.then(() => setLoadDayHabit(!loadDayHabit));
    promisse.catch((err) => console.log(err));
  }

  return (
    <>
      <div>
        <div>
          <h1> {name} </h1>
          <h2>sequencia atual {currentSequence} </h2>
          <h2> melhor sequencia {highestSequence} </h2>
        </div>
        <button onClick={(e) => setDone(e)}>{`${done}`}</button>
      </div>
    </>
  );
};
