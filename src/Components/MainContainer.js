import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";
import SecondaryContainer from "./SecondaryContainer";
import ShowMovieDetails from "./ShowMovieDetails";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.onPlayingMovies);

  if (movies == null) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[18%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
