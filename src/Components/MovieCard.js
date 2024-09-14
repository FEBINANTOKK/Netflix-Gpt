import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

import { useDispatch } from "react-redux";
import {
  addMovieDetails,
  addMovieIdToShow,
  addShowDetailsfalse,
  addShowDetailstrue,
} from "../Utils/movieSlice";

const MovieCard = ({ poster_path, id }) => {
  const disptch = useDispatch();

  const ShowMovieDetails = () => {
    disptch(addShowDetailsfalse(false));
    disptch(addMovieIdToShow(null));

    disptch(addShowDetailstrue(true));
    disptch(addMovieIdToShow(id));
  };
  if (!poster_path) return null;
  return (
    <div className="w-32" onClick={ShowMovieDetails}>
      <img src={IMG_CDN_URL + poster_path} alt="MovieName" />
    </div>
  );
};

export default MovieCard;
