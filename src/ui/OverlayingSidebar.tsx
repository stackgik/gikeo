import { HiOutlineXMark } from "react-icons/hi2";
import Sidebar from "./Sidebar";
import { useMenuToggle } from "../context/MenuToggleContext";

const OverlayingSidebar = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useMenuToggle();

  if (!isSidebarOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-10 h-[100svh] w-full backdrop-blur-md"
        onClick={() => setIsSidebarOpen(false)}
      >
        <span className="absolute left-[27rem] top-[2rem] z-10 flex aspect-square h-[4rem] cursor-pointer items-center justify-center rounded-full bg-brand-200 text-[2rem]">
          <HiOutlineXMark className="dark:text-dark-grey-100" />
        </span>
      </div>
      <div className="scrollbar-hide fixed left-0 top-0 z-10 h-screen max-h-[100vh] w-[25rem] overflow-y-auto">
        <Sidebar />
      </div>
    </>
  );
};

export default OverlayingSidebar;
