import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[25%] md:pt-[22%] lg:pt-[20%] px-4 md:px-12 lg:px-24 absolute text-white bg-gradient-to-r from-black via-black/20 to-transparent z-10 font-sans">
      <h1 className="text-lg sm:text-3xl md:text-4xl lg:text-6xl font-black md:max-w-xl lg:max-w-2xl drop-shadow-2xl">
        {title}
      </h1>
      <div className="hidden lg:block py-6">
        <p className="text-lg w-1/3 h-28 overflow-y-scroll scrollbar-hide text-gray-200 leading-relaxed">
            {overview}
          </p>
        </div>
      {/* Tablet specific description - scrollable but compact (3 lines) */}
      <div className="hidden md:block lg:hidden py-4">
        <p className="text-sm w-3/4 md:w-1/2 h-16 md:h-20 overflow-y-scroll scrollbar-hide text-gray-200 leading-snug">
          {overview}
        </p>
      </div>
      <div className="my-2 md:my-6 flex gap-2 md:gap-3">
        <button className="bg-white text-black py-1 px-3 md:py-3 md:px-10 text-xs md:text-xl rounded-md hover:bg-gray-200 transition-all font-bold flex items-center shadow-lg">
          <span className="mr-1 md:mr-2">▶</span> Play
        </button>
        <button className="hidden sm:inline-block bg-gray-500/70 text-white py-1 px-3 md:py-3 md:px-10 text-xs md:text-xl rounded-md hover:bg-gray-600/70 transition-all font-bold backdrop-blur-sm">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
