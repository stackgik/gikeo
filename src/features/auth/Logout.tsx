import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useLogout from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";
import { MouseEvent } from "react";

const Logout = () => {
  const { logout, isLoggingOut } = useLogout();

  function handleLogout(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    logout();
  }

  return (
    <Link to="" className="navlink group" onClick={handleLogout}>
      {isLoggingOut ? (
        <SpinnerMini />
      ) : (
        <HiOutlineArrowLeftStartOnRectangle
          className="group-hover:text-red-500"
          id="logout"
        />
      )}
      <span>Logout</span>
    </Link>
  );
};

export default Logout;
