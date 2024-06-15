import Logout from "../features/auth/Logout";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Version from "./Version";

const Sidebar = () => {
  return (
    <aside className="col-start-1 row-span-full row-start-1 grid grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-8 bg-grey-0 px-[2.4rem] py-[3.2rem] dark:bg-dark-grey-0">
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
