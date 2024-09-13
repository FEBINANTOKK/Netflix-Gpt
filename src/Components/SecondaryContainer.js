import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import ShowMovieDetails from "./ShowMovieDetails";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const movieId = useSelector(
    (Store) => Store.movies.showMovieDetails.movieIdToShow
  );
  return (
    movies.onPlayingMovies &&
    movies.PopularMovies &&
    movies.topRatedMovies &&
    movies.upcomingMovies && (
      <div className=" relative  bg-black">
        <div className=" text-white">{movieId && <ShowMovieDetails />}</div>
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
