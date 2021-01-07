import React, { Fragment } from "react";
const Artista = ({ artista }) => {
  if (Object.keys(artista).length === 0) return null;

  const {
    strArtistThumb,
    strArtist,
    strBiographyES,
    strBiographyEN,
    strGenre,
  } = artista;
  const biografia = strBiographyES ? strBiographyES : strBiographyEN;
  const Informacion =
    artista === "No hay resultados" ? (
      <p className="mt-4">
        No se hay información disponible sobre este artista
      </p>
    ) : (
      <div className="">
        <div className="card-body">
          <img
            className="img-fluid"
            src={strArtistThumb}
            alt="Imagen del artista"
          />
        </div>
        <div className="card-body p-2">
          <h3 className="text-center">{strArtist}</h3>
          <p className="card-text">Genero: {strGenre}</p>
          <h2 className="card-text">Biografia:</h2>
          <p className="mt-4">{biografia}</p>
          <p className="card-text">
            <a
              href={`https://${artista.strFacebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href={`https://${artista.strTwitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href={`${artista.strLastFMChart}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-lastfm"></i>
            </a>
          </p>
        </div>
      </div>
    );
  return (
    <Fragment>
      <div className="card border-light">
        <div className="card-header bg-primary text-light font-weight-bold">
          Infomación sobre el artista
        </div>
        {Informacion}
      </div>
    </Fragment>
  );
};

export default Artista;
