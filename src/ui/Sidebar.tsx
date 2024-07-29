import Logout from "../features/auth/Logout";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Version from "./Version";

const Sidebar = () => {
  return (
    <aside
      className={`grid h-full grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-8 bg-grey-0 px-[2.4rem] PC:pt-4 dark:bg-dark-grey-0`}
    >
      <Logo />

      <div className="mt-12">
        <MainNav />
      </div>

      <div>
        <Logout />
        <Version />
      </div>
    </aside>
  );
};

export default Sidebar;
