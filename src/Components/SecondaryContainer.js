import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.onPlayingMovies &&
    movies.PopularMovies &&
    movies.topRatedMovies &&
    movies.upcomingMovies && (
      <div className="   bg-black">
        <div className="relative z-20 mt-0 md:-mt-48">
          <MovieList
            title={"onPlayingMovies"}
            movies={movies.onPlayingMovies}
          />
          <MovieList title={"PopularMovies"} movies={movies.PopularMovies} />

          <MovieList title={"TopRatedMovies"} movies={movies.topRatedMovies} />

          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />

          <MovieList
            title={"onPlayingMovies"}
            movies={movies.onPlayingMovies}
          />
          <MovieList
            title={"onPlayingMovies"}
            movies={movies.onPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
