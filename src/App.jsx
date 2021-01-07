import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Artista from "./components/Artista";
import Footer from "./components/Footer";

function App() {
  //Definir el state
  const [busquedaLetra, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState("");
  const [artista, setArtista] = useState("");
  //Cuando busquedaLetra letra cambie consulta el API
  useEffect(() => {
    if (Object.keys(busquedaLetra).length === 0) return;
    const consultarAPILetras = async () => {
      const { artista, cancion } = busquedaLetra;
      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion] = await Promise.all([axios(url), axios(url2)]);
      setLetra(letra.data);
      const artist = informacion.data.artists !== null ? informacion.data.artists[0] : 'No hay resultados' ;
      setArtista(artist);
    };

    consultarAPILetras();
  }, [busquedaLetra]);
  return (
      <Fragment>
        <Formulario setBusquedaLetra={setBusquedaLetra} />
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <Artista 
              artista={artista}
              />
            </div>

            <div className="col-md-6">
              <Cancion letra={letra} />
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
  );
}

export default App;
