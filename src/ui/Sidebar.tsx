import Logout from "../features/auth/Logout";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Version from "./Version";

const Sidebar = () => {
  return (
    <aside className="grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-8 col-start-1 row-start-1 row-span-full bg-grey-0 py-[3.2rem] px-[2.4rem] dark:bg-dark-grey-0">
      <Logo />
      <MainNav />
      <div>
        <Logout />
        <Version />
      </div>
    </aside>
  );
};

export default Sidebar;
