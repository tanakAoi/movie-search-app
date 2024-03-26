import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="navbar bg-zinc-300">
        <div className="flex-1">
          <NavLink className="btn btn-ghost text-xl" to={"/"}>
            Movie Search
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-2">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/movie"}>Movie</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
