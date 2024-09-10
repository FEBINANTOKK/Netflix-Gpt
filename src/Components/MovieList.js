import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" pl-7">
      <h3 className="text-2xl font-semibold py-3 text-white">{title}</h3>
      <div className="flex  overflow-x-scroll ">
        <div className="flex gap-3">
          {movies.map((movie) => (
            <MovieCard key={movie.id} poster_path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
