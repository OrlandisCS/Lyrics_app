import React, { Fragment } from "react";
const Cancion = ({ letra}) => {
  if (letra.length === 0) return null;
  
  return (
    <Fragment>
      <h2 className="text-uppercase">Letra de la cancion</h2>
      {(letra.lyrics) === '' ? <p>No se han encontrado Resultados de la letra de la canción </p> : (letra.lyrics) }
    </Fragment>
  );
};

export default Cancion;
