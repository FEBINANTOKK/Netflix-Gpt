import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("ouyouu");
  console.log(movies);

  return (
    <div className="">
      <h3 className="text-2xl font-semibold py-3 text-white">{title}</h3>
      <div className="flex whitespace-nowrap overflow-auto scrollbar-hide ">
        <div className="flex gap-1">
          {movies.map((movie) => (
            <MovieCard poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
