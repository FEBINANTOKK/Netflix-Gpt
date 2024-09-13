import React from "react";

import { useShowMovieDetails } from "./useMovieDetails";
import { IMG_CDN_URL } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieDetails,
  addMovieIdToShow,
  addShowDetails,
} from "../Utils/movieSlice";

const ShowMovieDetails = () => {
  useShowMovieDetails();
  const showMovieDetails11 = useSelector((Store) => Store.movies);
  const disptch = useDispatch();
  const hideShowDetails = () => {
    disptch(addShowDetails(false));
    disptch(addMovieIdToShow(null));
    disptch(addMovieDetails(null));
  };

  return (
    <div className="max-w-[800px]  bg-black bg-opacity-80 m-auto px-20 py-16 fixed z-[70] top-5  right-0 left-0 mx-auto">
      {showMovieDetails11 && (
        <>
          <img
            className=" m-auto w-[50%] object-cover rounded-2xl"
            src={
              IMG_CDN_URL +
              showMovieDetails11.showMovieDetails.movieDetails?.poster_path
            }
            alt="Poster"
          ></img>
          <h4 className="text-white text-4xl font-bold py-3">
            {showMovieDetails11.showMovieDetails.movieDetails?.original_title}
          </h4>

          <p className="font-semibold">
            {" "}
            Language :
            {
              showMovieDetails11.showMovieDetails.movieDetails
                ?.original_language
            }
          </p>
          <p className="text-xl pt-2 font-extralight">
            {showMovieDetails11.showMovieDetails.movieDetails?.tagline}
          </p>

          <p className="text-sm font-extralight">
            {showMovieDetails11.showMovieDetails.movieDetails?.overview}
          </p>
          <span className="ftext-sm font-extralight">
            Productioc Companies :{" "}
          </span>
          {showMovieDetails11.showMovieDetails.movieDetails?.production_companies.map(
            (res) => (
              <>
                <span>{res.name}</span>
                {"          "}/
              </>
            )
          )}
        </>
      )}
      <button
        className="px-4 py-1 text-xl block bg-white text-black font-bold rounded-lg my-4"
        onClick={hideShowDetails}
      >
        cancel
      </button>
    </div>
  );
};

export default ShowMovieDetails;
