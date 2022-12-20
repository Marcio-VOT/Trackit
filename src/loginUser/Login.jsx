import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/UserData";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default () => {
  const {
    setToken,
    setName,
    setImage,
    setTotalHabits,
    totalHabits,
    setDayHabit,
    setPercentage,
    config,
  } = useContext(LoginContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
  let auxToken;
  function handleSubmit(e) {
    e.preventDefault();
    setTotalHabits(!totalHabits);
    let promisse = axios.post(URL, { email, password });
    promisse.then((answer) => {
      auxToken = answer.data.token;
      setToken(auxToken);
      setImage(answer.data.image);
      setName(answer.data.name);
      navigate("/habitos");
    });
    promisse.catch((err) => alert(err.response.data.message));
  }
  return (
    <LoginStyle>
      <img src="https://cdn.discordapp.com/attachments/1024803000004391005/1053005438901297252/logo.png" />
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="email"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          placeholder="senha"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        /> */}

        <button type="submit">Entrar</button>

        <Link to={"/cadastro"}>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </form>
    </LoginStyle>
  );
};
const LoginStyle = styled.div`
  display: column;
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  img {
    width: 180px;
    height: 180px;
    margin-top: 68px;
    margin-left: calc(50% - 90px);
  }
  input {
    width: 80%;
    height: 45px;
    margin-left: 10%;
    margin-bottom: 6px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
  }
  button {
    width: 80%;
    height: 45px;
    margin-left: 10%;
    background: #52b6ff;
    border-radius: 4.63636px;
    border-style: none;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #ffffff;
  }
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
    margin-top: 25px;
  }
`;
