import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShowMovieDetails from "./ShowMovieDetails";
const GptMovieSuggestion = () => {
  const { moviesName, tmdbMovies } = useSelector((store) => store.gpt);
  const movieId = useSelector(
    (Store) => Store.movies.showMovieDetails.showDetails
  );
  if (!moviesName) return null;
  return (
    <div className=" relative z-50 text-white bg-black bg-opacity-35 p-4 ">
      <div className="  text-white">{movieId && <ShowMovieDetails />}</div>
      {moviesName.map((movie, index) => (
        <MovieList key={moviesName} title={movie} movies={tmdbMovies[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
