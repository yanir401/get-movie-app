import React, { useContext, useEffect, useState } from "react";
import "./movieDetails.css";
import { SelectedMovieContext } from "../../context/moviesContext";
import { fetchSelectedMovie } from "../../api/movieDb/movieDb";
import {
  useLocation,
  useMatch,
  useParams,
  useNavigate,
} from "react-router-dom";

const MovieDetails = ({ match, history }) => {
  const [movie, setMovie] = useState();
  const [officialTrailer, setOfficialTrailer] = useState();
  const [showTrailer, setShowTrailer] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const getMovie = async () => {
      const movie = await fetchSelectedMovie(id);
      setMovie(movie);
      const getOfficialTrailer = movie.videos.results.find((video) => {
        return video.name.includes("fficial") || video;
      });
      if (getOfficialTrailer) setOfficialTrailer(getOfficialTrailer.key);
    };
    getMovie();
  }, []);

  const toggleShowTrailer = () => {
    setShowTrailer((showTrailer) => !showTrailer);
  };
  const { contextMovies, setContextMovies } = useContext(SelectedMovieContext);
  return (
    // separate components, trailer and button
    <>
      {movie && (
        <>
          <div
            className="movie-details hero"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${movie.backdrop_path})`,
            }}
          >
            <div className="overlay">
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
                  <button className="btn btn-grey" onClick={toggleShowTrailer}>
                    Close
                  </button>
                </div>
              ) : (
                <>
                  {officialTrailer && (
                    <button
                      className="btn btn-outline trailer"
                      onClick={toggleShowTrailer}
                    >
                      Watch Trailer
                    </button>
                  )}
                  <div className="movie-content">
                    <h2>{movie.original_title}</h2>
                    <p>{movie.overview}</p>
                    <h4>{movie.vote_average}</h4>
                    <button
                      className="btn btn-grey"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
