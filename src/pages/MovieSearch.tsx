import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { IMovie } from "../models/IMovie";
import { ShowResult } from "../components/ShowResult";
import { getMoviesByWord } from "../services/movieService";

export const MovieSearch = () => {
  const [movies, setMovies] = useState<IMovie[]>(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );
  const [searchWord, setSearchWord] = useState(
    localStorage.getItem("search word") || ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const searchMovies = async (searchWord: string) => {
    setIsLoading(true);

    setSearchWord(searchWord);
    localStorage.setItem("search word", searchWord);

    const moviesData = await getMoviesByWord(searchWord)
    setMovies(moviesData);
    localStorage.setItem("movies", JSON.stringify(moviesData));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <SearchForm search={searchMovies} />
      <ShowResult movies={movies} searchWord={searchWord} isLoading={isLoading} />
    </div>
  );
};
