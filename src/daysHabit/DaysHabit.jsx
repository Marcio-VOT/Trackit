import React from "react";
import Footer from "../footer/Footer";
import Top from "../top/Top";
import Activity from "./Activity";

export default () => {
  return (
    <>
      <Top />
      <div>
        <h1>Dia, xx/xx</h1>
        <h2>xx% dos hábitos concluídos</h2>
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
        <Activity />
      </div>
      <Footer />
    </>
  );
};
