import { IOmdbResponse } from "../models/IOmdbResponse";
import { IMovieExt } from "../models/IMovieExt";
import { get } from "./serviceBase";

const API_URL = `http://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_OMDB_API_KEY
}&`;

export const getMoviesByWord = async (searchWord: string) => {
  const response = await get<IOmdbResponse>(`${API_URL}s=${searchWord}`);
  return response.data.Search;
};

export const getMovieDetailById = async (imdbId: string) => {
  const response = await get<IMovieExt>(`${API_URL}i=${imdbId}`);
  return response.data;
};
