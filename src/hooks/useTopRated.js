import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../Utils/Constants";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const dispatch = useDispatch();
  const getTopRatedMovieLists = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIE_OPTIONS
    );

    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovieLists();
  }, []);
};

export default useTopRated;
