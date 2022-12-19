import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const URL =
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

  function handleSubmit(e) {
    e.preventDefault();
    const promisse = axios.post(URL, { email, name, image, password });
    promisse.then(() => navigate("/"));
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
        <input
          required
          placeholder="nome"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          placeholder="foto"
          type="url"
          name="url"
          id="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
        <Link to={"/"}>
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </form>
    </>
  );
};
