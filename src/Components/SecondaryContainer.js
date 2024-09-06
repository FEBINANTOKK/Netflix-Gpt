import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.onPlayingMovies && (
      <div className="   bg-black">
        <div className="relative z-20 -mt-48">
          <MovieList
            title={"onPlayingMovies"}
            movies={movies.onPlayingMovies}
          />
          <MovieList
            title={"onPlayingMovies"}
            movies={movies.onPlayingMovies}
          />

          <MovieList
            title={"onPlayingMovies"}
            movies={movies.onPlayingMovies}
          />

          <MovieList
            title={"onPlayingMovies"}
            movies={movies.onPlayingMovies}
          />

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
