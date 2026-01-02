import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    // Render a loading state or placeholder while movies are null
    return <p className="text-gray-500">Loading movies...</p>;
  }
  console.log(movies);
  return (
    <div className="pt-4 space-y-2 flex flex-col">
      <h1 className="text-2xl font-bold px-4 text-white">{title}</h1>
      <div className=" flex mx-5 p-3 overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p className="text-gray-500">No movies to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
