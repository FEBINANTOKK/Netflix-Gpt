import React, { useEffect, useState } from "react";
import { MOVIE_OPTIONS } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";

export const useShowMovieDetails = () => {
  const disptch = useDispatch();
  const movieId = useSelector(
    (Store) => Store.movies.showMovieDetails.movieIdToShow
  );

  const fetchDetails = async () => {
    const details = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      MOVIE_OPTIONS
    );
    const json = await details.json();
    console.log(json);

    disptch(addMovieDetails(json));
  };

  useEffect(() => {
    movieId && fetchDetails();
  }, []);
};
