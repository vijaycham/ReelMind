import React, { useRef } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);

  if (!movies) {
    return <p className="text-gray-500">Loading movies...</p>;
  }

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 600;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-4 space-y-2 flex flex-col group relative">
      <h1 className="text-xl md:text-2xl font-bold px-4 text-white">{title}</h1>

      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 z-30 h-full bg-black/40 hover:bg-black/60 text-white px-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <span className="text-4xl">{"<"}</span>
        </button>

        <div
          ref={scrollRef}
          className="flex mx-2 md:mx-5 p-3 overflow-x-scroll scrollbar-hide scroll-smooth w-full"
        >
          <div className="flex gap-2">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))
            ) : (
              <p className="text-gray-500">No movies to display</p>
            )}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 z-30 h-full bg-black/40 hover:bg-black/60 text-white px-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block"
        >
          <span className="text-4xl">{">"}</span>
        </button>
      </div>
    </div>
  );
};

export default MovieList;
