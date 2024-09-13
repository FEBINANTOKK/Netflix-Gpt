import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
const GptMovieSuggestion = () => {
  const { moviesName, tmdbMovies } = useSelector((store) => store.gpt);
  if (!moviesName) return null;
  return (
    <div className=" relative z-50 text-white bg-black bg-opacity-35 p-4 ">
      {moviesName.map((movie, index) => (
        <MovieList key={moviesName} title={movie} movies={tmdbMovies[index]} />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
