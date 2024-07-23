import DarkModeToggle from "./DarkModeToggle";
import SearchField from "../features/search/SearchField";
import User from "./User";
import Welcome from "./Welcome";
import HamburgerMenu from "./HamburgerMenu";
import Logo from "./Logo";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useState } from "react";

const Header = () => {
  const [isSearchFieldOpen, setIsSearchFieldOpen] = useState(false);

  return (
    <>
      <header className="col-start-2 row-start-1 flex items-center justify-between border border-grey-100 bg-grey-0 p-8 dark:border-dark-grey-100 dark:bg-dark-grey-0">
        <div className="flex items-center gap-8">
          <HamburgerMenu />
          <div className="hidden PC:block">
            <Logo />
          </div>
          <Welcome />
        </div>

        <div className="tablet:hidden">
          <SearchField />
        </div>

        <div className="flex items-center gap-4">
          <HiOutlineMagnifyingGlass
            className="hidden h-[25px] w-[25px] text-grey-400 tablet:block dark:text-dark-grey-400"
            onClick={() => setIsSearchFieldOpen((prev) => !prev)}
          />
          <DarkModeToggle />
          <User />
        </div>
      </header>

      {isSearchFieldOpen && (
        <div className="w-full bg-grey-0 px-8 py-4 dark:bg-dark-grey-0">
          <SearchField setIsSearchFieldOpen={setIsSearchFieldOpen} />
        </div>
      )}
    </>
  );
};

export default Header;
