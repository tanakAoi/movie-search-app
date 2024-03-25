import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Movie Search</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
