import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../contexts/UserData";

export default () => {
  const { setToken, setName, setImage } = useContext(LoginContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";
  function handleSubmit(e) {
    e.preventDefault();
    const promisse = axios.post(URL, { email, password });
    promisse.then((answer) => {
      setToken(answer.data.token);
      setImage(answer.data.image);
      setName(answer.data.name);
      navigate("/habitos");
    });
    promisse.catch((err) => alert(err.response.data.message));
  }
  return (
    <>
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

        <button type="submit">Entrar</button>

        <Link to={"/cadastro"}>
          <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
      </form>
    </>
  );
};
