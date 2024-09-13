import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-24 md:pt-52 pl-6 md:pl-14 absolute w-screen aspect-video bg-black bg-opacity-50 text-white cursor-pointer ">
      <h3 className="text-lg md:text-3xl font-bold pb-4"> {title}</h3>
      <p className="hidden md:inline-block font-light text-xs max-w-[30%] mb-5">
        {overview}
      </p>

      <div>
        <button className=" bg-white text-black rounded-lg px-3 md:px-7 py-1 hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="hidden md:inline-block  bg-gray-500  rounded-lg px-7 py-1 ml-4 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
