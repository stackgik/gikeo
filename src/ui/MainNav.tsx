import {
  HiOutlineBookmark,
  HiOutlineHome,
  HiOutlineFilm,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import { MdOutlineMovieCreation } from "react-icons/md";
import { NavLink } from "react-router-dom";
const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <li>
          <NavLink to="/dashboard" className="navlink group">
            <HiOutlineHome className="group-hover:text-brand-500" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/explore/movies" className="navlink group">
            <MdOutlineMovieCreation className="group-hover:text-brand-500" />
            <span>Movies</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/tvseries" className="navlink group">
            <HiOutlineFilm className="group-hover:text-brand-500" />
            <span>TV series</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/bookmarks" className="navlink group">
            <HiOutlineBookmark className="group-hover:text-brand-500" />
            <span>Bookmarks</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="navlink group">
            <HiOutlineCog6Tooth className="group-hover:text-brand-500" />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
