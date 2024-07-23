import {
  HiOutlineBookmark,
  HiOutlineHome,
  HiOutlineFilm,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import { MdOutlineMovieCreation } from "react-icons/md";
import NavItem from "./NavItem";

const MainNav = () => {
  return (
    <nav>
      <ul className="flex flex-col gap-4">
        <NavItem to={"/dashboard"} label={"Dashboard"} Icon={HiOutlineHome} />
        <NavItem
          to={"/explore/movies"}
          label={"Movies"}
          Icon={MdOutlineMovieCreation}
        />
        <NavItem
          to={"/explore/tv-series"}
          label={"TV series"}
          Icon={HiOutlineFilm}
        />
        <NavItem
          to={"/bookmarks"}
          label={"Bookmarks"}
          Icon={HiOutlineBookmark}
        />
        <NavItem
          to={"/settings"}
          label={"Settings"}
          Icon={HiOutlineCog6Tooth}
        />
      </ul>
    </nav>
  );
};

export default MainNav;
