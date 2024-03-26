import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { IMovie } from "../models/IMovie";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { ShowResult } from "../components/ShowResult";

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
    const response = await axios.get<IOmdbResponse>(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&s=${searchWord}`
    );
    setMovies(response.data.Search);
    localStorage.setItem("movies", JSON.stringify(response.data.Search));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <SearchForm search={searchMovies} />
      <ShowResult movies={movies} searchWord={searchWord} isLoading={isLoading} />
    </div>
  );
};
