import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { useContext } from "react";
import { LoginContext } from "../contexts/UserData";

export default () => {
  const { percentage } = useContext(LoginContext);
  return (
    <>
      <Spacer />
      <FooterStyled>
        <Link to={"/habitos"}>
          <p>Hábitos</p>
        </Link>
        <Link to={"/hoje"}>
          <ProgressBarStyled>
            <CircularProgressbar
              value={percentage}
              text="Hoje"
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </ProgressBarStyled>
        </Link>
        <Link to={"/historico"}>
          <p>Histórico</p>
        </Link>
      </FooterStyled>
    </>
  );
};
const ProgressBarStyled = styled.div`
  position: absolute;
  bottom: 18px;
  left: calc(50% - 40px);
  width: 80px;
`;
const FooterStyled = styled.div`
  a {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #52b6ff;
    text-decoration: none;
  }
  position: relative;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Spacer = styled.div`
  width: 100%;
  height: 108px;
`;
