import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div className="grid grid-cols-[260px_1fr] h-screen grid-rows-[auto_1fr_auto]">
      <Sidebar />
      <Header />
      <main className="bg-grey-50 dark:bg-dark-grey-50 overflow-y-scroll">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
