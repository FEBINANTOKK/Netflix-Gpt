import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-52">
      <img src={IMG_CDN_URL + poster_path} alt="MovieName" />
    </div>
  );
};

export default MovieCard;
