import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useLogout from "./useLogout";
import { MouseEvent } from "react";
import OverlayLoader from "../../ui/OverlayLoader";

const Logout = () => {
  const { logout, isLoggingOut } = useLogout();

  function handleLogout(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    logout();
  }

  if (isLoggingOut) return <OverlayLoader />;
  return (
    <Link to="" className="navlink group" onClick={handleLogout}>
      <HiOutlineArrowLeftStartOnRectangle
        className="group-hover:text-red-500"
        id="logout"
      />
      <span>Logout</span>
    </Link>
  );
};

export default Logout;
