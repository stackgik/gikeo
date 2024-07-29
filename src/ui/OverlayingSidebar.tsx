import Sidebar from "./Sidebar";
import { useMenuToggle } from "../context/MenuToggleContext";

const OverlayingSidebar = () => {
  const { setIsSidebarOpen, isSidebarOpen } = useMenuToggle();

  // if (!isSidebarOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-10 h-[100svh] w-full backdrop-blur-md"
        onClick={() => setIsSidebarOpen(false)}
      ></div>
      <div className="scrollbar-hide fixed left-0 top-0 z-10 h-screen max-h-[100vh] w-[25rem] overflow-y-auto">
        <Sidebar />
      </div>
    </>
  );
};

export default OverlayingSidebar;
