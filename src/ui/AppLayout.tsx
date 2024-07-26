import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useMenuToggle } from "../context/MenuToggleContext";
import OverlayingSidebar from "./OverlayingSidebar";

const AppLayout = () => {
  const { isSidebarOpen } = useMenuToggle();

  return (
    <div className="grid h-screen grid-cols-[260px_1fr] grid-rows-[auto_1fr_auto] PC:flex PC:flex-col">
      <div className="col-start-1 row-span-full row-start-1 PC:hidden">
        <Sidebar />
      </div>
      <Header />
      <main
        className={`${isSidebarOpen ? "overflow-y-hidden" : "overflow-y-scroll"} min-h-0 flex-1 bg-grey-50 dark:bg-dark-grey-50`}
      >
        <Outlet />
      </main>
      <Footer />
      <OverlayingSidebar />
    </div>
  );
};

export default AppLayout;
