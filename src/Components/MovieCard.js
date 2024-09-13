import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-32">
      <img src={IMG_CDN_URL + poster_path} alt="MovieName" />
    </div>
  );
};

export default MovieCard;
