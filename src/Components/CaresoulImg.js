import React from "react";
import { IMG_CDN_URL } from "../Utils/Constants";

const CaresoulImg = () => {
  return (
    <div>
      <img
        className=" m-auto w-[100px] sm:w-[500px] object-cover rounded-2xl"
        src={"https://image.tmdb.org/t/p/w500/9Sgr19oWCPh9m3LRWScNqWrqGDF.jpg"}
        alt="Poster"
      ></img>
    </div>
  );
};

export default CaresoulImg;
