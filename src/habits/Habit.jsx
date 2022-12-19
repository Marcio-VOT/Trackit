import axios from "axios";
import React from "react";
import { useContext } from "react";
import { LoginContext } from "../contexts/UserData";

export default ({ name, days, id, setNewHabit, newHabit }) => {
  const { token } = useContext(LoginContext);
  function deleteHabit(e) {
    e.preventDefault();
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const config = { headers: { Authorization: `Bearer ${token}` } };
    const promisse = axios.delete(URL, config);
    promisse.then((a) => setNewHabit(!newHabit));
    promisse.catch((err) => console.log(err.response.data.message));
  }
  return (
    <>
      <div>
        <h1>{name}</h1>
        <h1 onClick={(e) => deleteHabit(e)}>lixo</h1>
        <form>
          <button>D</button>
          <button>S</button>
          <button>T</button>
          <button>Q</button>
          <button>Q</button>
          <button>S</button>
          <button>S</button>
        </form>
      </div>
    </>
  );
};
