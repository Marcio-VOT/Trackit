import React from "react";
import { Link } from "react-router-dom";

export default (props) => {
  function clearCreation(e) {
    e.preventDefault();
    props.setAddHabit(false);
  }
  function handleSubmit() {}
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="nome do hábito"
            type="text"
            name="habitName"
            id="habitName"
          />
          <button>D</button>
          <button>S</button>
          <button>T</button>
          <button>Q</button>
          <button>Q</button>
          <button>S</button>
          <button>S</button>
          <button onClick={(e) => clearCreation(e)}>Cancelar</button>{" "}
          <button type="submit">Salvar</button>
        </form>
      </div>
    </>
  );
};
