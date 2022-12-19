import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

export default () => {
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
              value="20"
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
        <Link to={"/"}>
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
    color: blue;
    text-decoration: none;
  }
  position: relative;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 60px;
  background-color: lightblue;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Spacer = styled.div`
  width: 100%;
  height: 98px;
`;
