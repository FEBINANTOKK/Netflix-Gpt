import { useDispatch, useSelector } from "react-redux";
import { MOVIE_OPTIONS } from "../Utils/Constants";
import { addUpcomingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);

  const dispatch = useDispatch();
  const getUpcomingMovieLists = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIE_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovieLists();
  }, []);
};

export default useUpcomingMovies;
