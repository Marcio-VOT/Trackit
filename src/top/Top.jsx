import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { LoginContext } from "../contexts/UserData";

export default () => {
  const { name, image } = useContext(LoginContext);
  return (
    <>
      <Spacer />
      <StyledTop>
        <h1>TrackIt</h1>
        <img src={image} alt={name} />
      </StyledTop>
    </>
  );
};
const StyledTop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  padding-left: 18px;
  padding-right: 18px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 30px;
    border-radius: 50%;
  }
  h1 {
    font-family: "Playball";
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #ffffff;
  }
`;
const Spacer = styled.div`
  width: 100%;
  height: 70px;
`;
