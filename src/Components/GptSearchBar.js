import React from "react";
import { BG_URL } from "../Utils/Constants";
import { useSelector } from "react-redux";
import lang from "../Utils/languageConstant";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%]  ">
      <div className="flex justify-center">
        <form className="bg-black w-[48%] grid grid-cols-12 p-2 rounded-3xl">
          <input
            type="text"
            placeholder={lang[langKey].placeholder}
            className="col-span-9 rounded-xl p-2  bg-slate-50"
          ></input>

          <button className="px-4 m-1 bg-red-800 text-white  col-span-3 rounded-lg ml-5 mr-2">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;
