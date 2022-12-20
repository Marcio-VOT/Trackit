import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "../contexts/UserData";
import Footer from "../footer/Footer";
import Top from "../top/Top";
import Activity from "./Activity";
import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";

export default () => {
  const dayjs = require("dayjs");
  let updateLocale = require("dayjs/plugin/updateLocale");
  dayjs.extend(updateLocale);
  dayjs.updateLocale("en", {
    weekdays: [
      "Domingo",
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
      "Sábado",
    ],
  });
  const {
    loadDayHabit,
    dayHabit,
    setDayHabit,
    config,
    percentage,
    setPercentage,
  } = useContext(LoginContext);
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
  }, [loadDayHabit]);

  return (
    <>
      <Top />
      <PorventageStyle>
        <h1>{dayjs().format("dddd, DD/MM")}</h1>
        <h2>{percentage}% dos hábitos concluídos</h2>
      </PorventageStyle>
      {!(dayHabit.length === 0) &&
        dayHabit.map((a) => {
          return (
            <Activity
              id={a.id}
              name={a.name}
              done={a.done}
              currentSequence={a.currentSequence}
              highestSequence={a.highestSequence}
              key={a.id}
            />
          );
        })}
      <Footer />
    </>
  );
};

const PorventageStyle = styled.div`
  margin-top: 28px;
  margin-left: 17px;
  margin-bottom: 28px;
  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */

    color: #126ba5;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;
