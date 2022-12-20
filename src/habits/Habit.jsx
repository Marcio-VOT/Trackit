import axios from "axios";
import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../contexts/UserData";

export default ({ name, days, id, setNewHabit, newHabit }) => {
  const { config } = useContext(LoginContext);
  function deleteHabit(e) {
    e.preventDefault();
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const promisse = axios.delete(URL, config);
    promisse.then((a) => setNewHabit(!newHabit));
    promisse.catch((err) => console.log(err.response.data.message));
  }
  return (
    <StyledHabit>
      <div>
        <h1>{name}</h1>

        <ion-icon
          onClick={(e) => deleteHabit(e)}
          name="trash-outline"
        ></ion-icon>
      </div>
      <form>
        <DayButton>D</DayButton>
        <DayButton>S</DayButton>
        <DayButton>T</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>Q</DayButton>
        <DayButton>S</DayButton>
        <DayButton>S</DayButton>
      </form>
    </StyledHabit>
  );
};
const StyledHabit = styled.div`
  width: 90%;
  height: 91px;
  margin-left: 5%;
  padding-left: 5%;
  background: #ffffff;
  border-radius: 5px;
  margin-top: 10px;
  div {
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
    padding-top: 11px;
  }
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    margin-bottom: 8px;
    /* identical to box height */

    color: #666666;
  }
  ion-icon {
    font-size: 15px;
    background-color: transparent;
  }
`;

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
