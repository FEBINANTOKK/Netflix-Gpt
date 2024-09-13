import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../Utils/Constants";
import { addNowPlayingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.onPlayingMovies
  );

  const dispatch = useDispatch();
  const getMovieLists = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIE_OPTIONS
    );

    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getMovieLists();
  }, []);
};

export default useNowPlayingMovies;
