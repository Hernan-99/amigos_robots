import React from "react";

const Buscador = ({ searchCange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Buscar robot"
        onChange={searchCange}
      />
    </div>
  );
};
export default Buscador;
