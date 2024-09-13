import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../Utils/Constants";
import { addPopularMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const PopularMovies = useSelector((store) => store?.movies?.PopularMovies);

  const getPopularMovieLists = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIE_OPTIONS
    );

    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !PopularMovies && getPopularMovieLists();
  }, []);
};

export default usePopularMovies;
