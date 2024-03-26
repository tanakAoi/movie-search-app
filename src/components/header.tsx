import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="navbar bg-zinc-300">
        <div className="flex-1">
          <NavLink className="btn btn-ghost text-xl" to={"/"}>
            Movie Search App
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-2">
            <li>
              <NavLink to={"/"} className="text-base">Home</NavLink>
            </li>
            <li>
              <NavLink to={"/movie"} className="text-base">Movie</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
