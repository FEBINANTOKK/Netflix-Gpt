import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstant";
import dummyGptResponse from "../Utils/dummyGptResponse";
import { MOVIE_OPTIONS, OPEN_API_KEY } from "../Utils/Constants";
import { addGptMovies } from "../Utils/gptSlice";
// import client from "../Utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(" ");

  const dispatch = useDispatch();
  console.log(searchText);

  const query =
    "Act as a movie recomented system suggest some movies for the query :" +
    searchText.current.value +
    "only give me name of some movies, comma seperated like the example result given ahead. Example Result: Gadar,Don ,Golmaal, goat,vikram";

  const searchMoovieTMDB = async (movie) => {
    const response = await fetch(
      // "https://api.themoviedb.org/3/search/movie?query=" +
      //   { movie } +
      //   "&include_adult=false&language=en-US&page=1",
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      MOVIE_OPTIONS
    );

    const json = await response.json();

    return json.results;
  };
  const handleSearchClick = async () => {
    // const chatCompletion = await client.chat.completions.create({
    //   messages: [{ role: "user", content: query }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(chatCompletion);

    const gptMovies = dummyGptResponse[0]?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMoovieTMDB(movie));
    console.log("SEARCH ON OPENAPI");
    console.log(dummyGptResponse);

    console.log(gptMovies);
    console.log(promiseArray);

    const tmdbMovies = await Promise.all(promiseArray);
    console.log(tmdbMovies);
    dispatch(addGptMovies({ tmdbMovies: tmdbMovies, gptMovies: gptMovies }));
  };

  return (
    <div className="pt-[10%]  ">
      <div className="flex justify-center">
        <form
          className="bg-black w-[48%] grid grid-cols-12 p-2 rounded-3xl"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langKey].placeholder}
            className="col-span-9 rounded-xl p-2  bg-slate-50"
          ></input>

          <button
            className="px-4 m-1 bg-red-800 text-white  col-span-3 rounded-lg ml-5 mr-2"
            onClick={handleSearchClick}
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
