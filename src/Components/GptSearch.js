import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../Utils/Constants";

const GptSearch = () => {
  return (
    <div>
      <div>
        <img
          className="fixed -z-20 h-[100vh] w-[100vw] object-cover"
          src={BG_URL}
          alt="bg"
        />
      </div>
      <div className="absolute top-0 -z-10 w-[100vw] h-[100vh] bg-black bg-opacity-40  "></div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
