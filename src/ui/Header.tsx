import DarkModeToggle from "./DarkModeToggle";
import SearchField from "../features/search/SearchField";
import User from "./User";
import Welcome from "./Welcome";

const Header = () => {
  return (
    <header className="col-start-2 row-start-1 flex items-center justify-between border border-grey-100 bg-grey-0 p-8 dark:border-dark-grey-100 dark:bg-dark-grey-0">
      <Welcome />
      <SearchField />
      <div className="flex items-center gap-6">
        <DarkModeToggle />
        <User />
      </div>
    </header>
  );
};

export default Header;
