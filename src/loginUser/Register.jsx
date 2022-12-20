import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [disable, setDisable] = useState(false);

  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  function handleSubmit(e) {
    e.preventDefault();
    setDisable(true);
    const promisse = axios.post(URL, { email, name, image, password });
    promisse.then(() => {
      setDisable(false);
      navigate("/");
    });
    promisse.catch((err) => {
      setDisable(false);
      alert(err.response.data.message);
    });
  }

  return (
    <RegisterStyle>
      <img src="https://cdn.discordapp.com/attachments/1024803000004391005/1053005438901297252/logo.png" />
      <form onSubmit={handleSubmit}>
        <input
          disabled={disable}
          required
          placeholder="email"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          disabled={disable}
          required
          placeholder="senha"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          disabled={disable}
          required
          placeholder="nome"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          disabled={disable}
          required
          placeholder="foto"
          type="url"
          name="url"
          id="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button disabled={disable} type="submit">
          {disable ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#FFFFFF"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          ) : (
            "Cadastrar"
          )}
        </button>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </form>
    </RegisterStyle>
  );
};

const RegisterStyle = styled.div`
  display: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
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
    display: flex;
    align-items: center;
    justify-content: center;
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
