import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { IMovie } from "../models/IMovie";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { ShowResult } from "../components/ShowResult";

export const MovieSearch = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchWord, setSearchWord] = useState("");

  const searchMovies = async (searchWord: string) => {
    setSearchWord(searchWord)
    const response = await axios.get<IOmdbResponse>(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&s=${searchWord}`
    );
    setMovies(response.data.Search);
  };

  return (
    <div className="min-h-screen">
      <SearchForm search={searchMovies} />
      <ShowResult movies={movies} searchWord={searchWord} />
    </div>
  );
};
