import React, { useEffect } from "react";
import { Header } from "./Header";
import { MOVIE_OPTIONS } from "../Utils/Constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../Utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  const getMovieLists = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getMovieLists();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
