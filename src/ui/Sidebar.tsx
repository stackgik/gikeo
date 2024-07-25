import { useMenuToggle } from "../context/MenuToggleContext";
import Logout from "../features/auth/Logout";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Version from "./Version";

const Sidebar = () => {
  const { setIsSidebarOpen } = useMenuToggle();

  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <aside
      className="grid h-full grid-cols-1 grid-rows-[auto_1fr_auto] gap-y-8 bg-grey-0 px-[2.4rem] PC:pt-4 dark:bg-dark-grey-0"
      onClick={handleClick}
    >
      <Logo />
      <div className="PC:mt-6">
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
