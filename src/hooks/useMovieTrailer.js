import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../Utils/Constants";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      MOVIE_OPTIONS
    );

    const json = await data.json();

    const filtredData = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filtredData.length ? filtredData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
