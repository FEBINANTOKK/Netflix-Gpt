import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div>
      <img className="w-72" src={IMG_CDN_URL + poster_path} alt="MovieName" />
    </div>
  );
};

export default MovieCard;
