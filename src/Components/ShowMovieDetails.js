import React from "react";

import { useShowMovieDetails } from "./useMovieDetails";
import { IMG_CDN_URL } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovieDetails,
  addMovieIdToShow,
  addShowDetailsfalse,
} from "../Utils/movieSlice";
import CarouselComponent from "./Carousel";
const ShowMovieDetails = () => {
  useShowMovieDetails();
  const showMovieDetails11 = useSelector(
    (Store) => Store.movies.showMovieDetails
  );
  const disptch = useDispatch();
  const hideShowDetails = () => {
    disptch(addShowDetailsfalse(false));
    disptch(addMovieIdToShow(null));
    disptch(addMovieDetails(null));
  };

  if (!showMovieDetails11.movieDetails) return <div></div>;
  return (
    <div className="w-[100vw]  md:max-w-[1000px] flex  flex-col sm:flex-row gap-9 items-center rounded-3xl  bg-black bg-opacity-80 p-5 md:p-16 fixed  z-[70]  top-[10%]  right-0 left-0 m-auto">
      {showMovieDetails11 && (
        <>
          <div className="  ">
            <img
              className=" m-auto w-[120px] sm:w-[500px] object-cover rounded-2xl"
              src={IMG_CDN_URL + showMovieDetails11.movieDetails?.poster_path}
              alt="Poster"
            ></img>
          </div>
          <div>
            <h4 className="text-white text-xl md:text-4xl font-bold pb-1 sm:py-3">
              {showMovieDetails11.movieDetails?.original_title}
            </h4>

            <p className="  text-sm md:text-xl font-semibold">
              {" "}
              Language :{showMovieDetails11.movieDetails?.original_language}
            </p>
            <p className="text-sm sm:text-xl pt-2 font-extralight">
              {showMovieDetails11.movieDetails?.tagline}
            </p>

            <p className="text-sm hidden md:block font-extralight">
              {showMovieDetails11.movieDetails?.overview}
            </p>
            <div className="mt-1">
              <span className="text-xs sm:text-sm font-extralight ">
                Productioc Companies :{" "}
              </span>
              {showMovieDetails11.movieDetails?.production_companies.map(
                (res) => (
                  <>
                    <span className="text-xs sm:text-sm">{res.name}</span>
                    {"          "}/
                  </>
                )
              )}
            </div>

            <button
              className=" px-2 md:px-4 py-1 text-xs md:text-xl block bg-white text-black font-bold rounded-lg my-4"
              onClick={hideShowDetails}
            >
              cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShowMovieDetails;
