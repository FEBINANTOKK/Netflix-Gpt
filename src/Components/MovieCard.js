import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

import { useDispatch } from "react-redux";
import { addMovieIdToShow, addShowDetails } from "../Utils/movieSlice";

const MovieCard = ({ poster_path, id }) => {
  const disptch = useDispatch();

  const ShowMovieDetails = () => {
    disptch(addShowDetails(true));
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
