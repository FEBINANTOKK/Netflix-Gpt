import React, { useRef } from "react";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstant";
import client from "../Utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(" ");
  console.log(searchText);

  const query =
    "Act as a movie recomented system suggest some movies for the query :" +
    searchText.current.value +
    "only give me name of some movies, comma seperated like the example result given ahead. Example Result: Gadar,Don ,Golmaal, goat,vikram";

  const handleSearchClick = async () => {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
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
