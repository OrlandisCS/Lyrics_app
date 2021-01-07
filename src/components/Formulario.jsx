import React, { useState } from "react";
import Error from "./Error";

const Formulario = ({setBusquedaLetra}) => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });
  const [error, setError] = useState(false);
  const { artista, cancion } = busqueda;
  //Función a cada input para leer su contenido
  const actualizarState = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };
  //Consultar informacion
  const buscarInformacion = (e) => {
    e.preventDefault();
    if (artista.trim() === "" || cancion.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    //Pasar al componente principal
    setBusquedaLetra(busqueda);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <br />
        {error ? <Error mensaje="Todos los campos son obligatorios*" /> : null}
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Artista</label>
                    <input
                      type="text"
                      className="form-control"
                      name="artista"
                      placeholder="Nombre del Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="">Canción</label>
                    <input
                      type="text"
                      className="form-control"
                      name="cancion"
                      placeholder="Canción del Artista"
                      onChange={actualizarState}
                      value={cancion}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
