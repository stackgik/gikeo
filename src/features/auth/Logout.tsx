import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import { MouseEvent, useEffect } from "react";
import OverlayLoader from "../../ui/OverlayLoader";
import { useMenuToggle } from "../../context/MenuToggleContext";

const Logout = () => {
  const { logout, isLoggingOut } = useLogout();
  const { setIsSidebarOpen } = useMenuToggle();

  function handleLogout(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    logout();
  }

  useEffect(() => {
    if (!isLoggingOut) {
      setIsSidebarOpen(false);
    }
  }, [isLoggingOut, setIsSidebarOpen]);

  if (isLoggingOut) return <OverlayLoader />;

  return (
    <button className="navlink group" onClick={handleLogout}>
      <HiOutlineArrowLeftStartOnRectangle
        className="w-full group-hover:text-red-500"
        id="logout"
      />
      <span>Logout</span>
    </button>
  );
};

export default Logout;
