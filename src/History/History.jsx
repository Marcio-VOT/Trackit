import React from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
import Top from "../top/Top";

export default () => {
  return (
    <>
      <Top />
      <PorventageStyle>
        <h1>Histórico</h1>
        <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
      </PorventageStyle>
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

    color: #666666;
  }
`;
