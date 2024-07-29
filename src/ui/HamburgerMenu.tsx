import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { useMenuToggle } from "../context/MenuToggleContext";

const HamburgerMenu = () => {
  const { setIsSidebarOpen } = useMenuToggle();

  const handleToggle = () => {
    setIsSidebarOpen(true);
  };

  return (
    <div className="hidden h-[25px] w-[25px] text-grey-500 PC:block">
      <HiOutlineBars3BottomLeft
        className="h-full w-full"
        onClick={handleToggle}
      />
    </div>
  );
};

export default HamburgerMenu;
