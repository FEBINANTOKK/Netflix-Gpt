import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.onPlayingMovies && (
      <div className="  relative z-20 -mt-32">
        <MovieList title={"onPlayingMovies"} movies={movies.onPlayingMovies} />
        <MovieList title={"onPlayingMovies"} movies={movies.onPlayingMovies} />

        <MovieList title={"onPlayingMovies"} movies={movies.onPlayingMovies} />

        <MovieList title={"onPlayingMovies"} movies={movies.onPlayingMovies} />

        <MovieList title={"onPlayingMovies"} movies={movies.onPlayingMovies} />
        <MovieList title={"onPlayingMovies"} movies={movies.onPlayingMovies} />
      </div>
    )
  );
};

export default SecondaryContainer;
