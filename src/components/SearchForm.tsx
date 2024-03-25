import { ChangeEvent, FormEvent, useState } from "react";

export const SearchForm = () => {
  const [searchWord, setSearchWord] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchWord}
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />
      <button className="btn">SEARCH</button>
    </form>
  );
};
