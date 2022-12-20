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
      <div>
        <h1>{dayjs().format("dddd, DD/MM")}</h1>
        <h2>{percentage}% dos hábitos concluídos</h2>
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
      </div>
      <Footer />
    </>
  );
};
