import { useState } from "react";
import { SearchForm } from "../components/SearchForm";
import { IMovie } from "../models/IMovie";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";

export const MovieSearch = () => {
  const [movies, setMovies] = useState<IMovie[]>();

  const searchMovies = async (searchWord: string) => {
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
      <section>result</section>
    </div>
  );
};
