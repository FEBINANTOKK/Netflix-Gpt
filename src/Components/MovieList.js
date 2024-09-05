import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("ouyouu");
  console.log(movies);

  return (
    <div>
      <div>
        <h3>{title}</h3>
      </div>

      <div className="flex">
        {movies.map((movie) => (
          <MovieCard poster_path={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
