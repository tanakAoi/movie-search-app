export const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-10">
      <h2 className="text-3xl">Welcome to movie search app!</h2>
      <h3 className="flex flex-col gap-3">Instruction: </h3>
      <p>
        1. To search for movies, start by jumping to the 'Movie' page from the
        menu above.
      </p>
      <p>
        2. Enter the keyword you want to search for and click the 'Search'
        button.
      </p>
      <p>
        3. You can view detailed info for each movie by click on it.
      </p>
    </div>
  );
};
