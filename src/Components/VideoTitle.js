import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" pt-52 pl-14 absolute w-screen aspect-video bg-black bg-opacity-50 text-white cursor-pointer ">
      <h3 className="text-3xl font-bold pb-4"> {title}</h3>
      <p className=" font-light text-xs max-w-[30%] mb-5">{overview}</p>

      <div>
        <button className="bg-white text-black rounded-lg px-7 py-1 hover:bg-opacity-80">
          ▷ Play
        </button>
        <button className="bg-gray-500  rounded-lg px-7 py-1 ml-4 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
