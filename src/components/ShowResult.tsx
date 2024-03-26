import { useState } from "react";
import { IMovie } from "../models/IMovie";
import { IMovieExt } from "../models/IMovieExt";
import axios from "axios";

interface IShowResultProps {
  movies: IMovie[];
  searchWord: string;
  isLoading: boolean;
}

export const ShowResult = ({
  movies,
  searchWord,
  isLoading,
}: IShowResultProps) => {
  const [movie, setMovie] = useState<IMovieExt>();

  const getMovieDetail = async (imdbId: string) => {
    const response = await axios.get<IMovieExt>(
      `http://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_OMDB_API_KEY
      }&i=${imdbId}`
    );
    setMovie(response.data);

    const modal = document.getElementById("modal") as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <section className="p-10 flex flex-col items-center">
      {isLoading ? (
        <span className="loading loading-spinner loading-lg pt-36"></span>
      ) : (
        <>
          {movies.length > 0 && (
            <h1 className="text-2xl font-bold self-start">
              Result for: <i>{searchWord}</i>
            </h1>
          )}
          <div className="movies flex flex-wrap justify-center gap-8 before:max-w-72 before:w-full before:order-1 after:max-w-72 after:w-full">
            {movies.map((movie) => (
              <div
                key={movie.imdbID}
                className="max-w-72 flex flex-col items-center justify-between gap-5 pt-8 cursor-pointer"
                onClick={() => getMovieDetail(movie.imdbID)}
              >
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                  className="rounded-xl"
                />
                <h3 className="text-lg font-medium text-center">
                  {movie.Title}
                </h3>
              </div>
            ))}
          </div>
          <dialog id="modal" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <div className="px-8 py-5 flex flex-col items-center gap-3">
                <h3 className="font-bold text-xl">{movie?.Title}</h3>
                <div className="flex gap-10">
                  <p className="py-4">{movie?.Year}</p>
                  <p className="py-4">IMDB: {movie?.imdbRating}</p>
                </div>
                <div className="flex items-center gap-5">
                  <p className="py-4">{movie?.Rated}</p>
                  <span>|</span>
                  <p className="py-4">{movie?.Runtime}</p>
                  <span>|</span>
                  <p className="py-4">{movie?.Genre}</p>
                </div>
                <p className="py-4">Director: {movie?.Director}</p>
                <p className="py-4">Cast: {movie?.Actors}</p>
                <p className="py-4">{movie?.Plot}</p>
              </div>
            </div>
          </dialog>
        </>
      )}
    </section>
  );
};
