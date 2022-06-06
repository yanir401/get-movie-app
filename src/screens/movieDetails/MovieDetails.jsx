import React, { useContext, useEffect, useState } from "react";
import "./movieDetails.css";
import { SelectedMovieContext } from "../../context/moviesContext";
import { fetchSelectedMovie } from "../../api/movieDb/movieDb";

const MovieDetails = ({ match, history }) => {
  const [movie, setMovie] = useState();
  const [officialTrailer, setOfficialTrailer] = useState();
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchSelectedMovie(match.params.id);
      setMovie(movie);
      console.log(movie);
      const getOfficialTrailer = movie.videos.results.find((video) =>
        video.name.includes("fficial")
      );
      setOfficialTrailer(getOfficialTrailer.key);
    };
    getMovie();
  }, []);

  const toggleShowTrailer = () => {
    setShowTrailer((showTrailer) => !showTrailer);
  };
  const { contextMovies, setContextMovies } = useContext(SelectedMovieContext);
  return (
    <>
      {movie && (
        <>
          <div
            className="movie-details hero"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
            }}
          >
            {showTrailer ? (
              <div className="trailer">
                <iframe
                  width="853"
                  height="480"
                  src={`https://www.youtube.com/embed/${officialTrailer}?autoplay=1`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
                <button className="btn" onClick={toggleShowTrailer}>
                  Close
                </button>
              </div>
            ) : (
              <>
                <button className="btn" onClick={toggleShowTrailer}>
                  Watch Trailer
                </button>
                <div className="movie-content">
                  <h2>{movie.original_title}</h2>
                  <p>{movie.overview}</p>
                  <h4>{movie.vote_average}</h4>
                  <button className="btn" onClick={() => history.goBack()}>
                    Back
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
