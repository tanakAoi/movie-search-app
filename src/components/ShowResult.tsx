import { IMovie } from "../models/IMovie";

interface IShowResultProps {
  movies: IMovie[];
  searchWord: string;
}

export const ShowResult = ({ movies, searchWord }: IShowResultProps) => {
  return (
    <section className="p-10">
        <h1>Result for: {searchWord}</h1>
      <div className="movies flex flex-wrap justify-center gap-8 before:max-w-72 before:w-full before:order-1 after:max-w-72 after:w-full">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="max-w-72 flex flex-col items-center justify-between gap-5 pt-8"
          >
            <img src={movie.Poster} alt={movie.Title} className="rounded-xl" />
            <h3 className="text-lg font-medium text-center">{movie.Title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
