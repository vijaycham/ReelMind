import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300">
      <img
        alt="MovieCard"
        src={IMG_CDN_URL + posterPath}
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
