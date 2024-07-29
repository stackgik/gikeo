import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useMenuToggle } from "../context/MenuToggleContext";

const AppLayout = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useMenuToggle();

  return (
    <div className="grid h-[100svh] grid-cols-[260px_1fr] grid-rows-[auto_1fr_auto] PC:flex PC:flex-col">
      <div
        className={`col-start-1 row-span-full row-start-1 ${isSidebarOpen ? "PC:absolute PC:inset-0 PC:z-30 PC:h-[100svh] PC:w-[260px]" : "PC:hidden"}`}
      >
        <Sidebar />
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 h-[100svh] w-full backdrop-blur-md"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <Header />
      <main
        className={`${isSidebarOpen ? "overflow-y-hidden" : "overflow-y-scroll"} min-h-0 flex-1 bg-grey-50 dark:bg-dark-grey-50`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
