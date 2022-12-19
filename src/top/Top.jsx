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
  height: 60px;
  background-color: lightblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Spacer = styled.div`
  width: 100%;
  height: 60px;
`;
