import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import useLogout from "./useLogout";
import Spinner from "../../ui/Spinner";
import { MouseEvent } from "react";

const Logout = () => {
  const { logout, isLoggingOut } = useLogout();

  function handleLogout(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    logout();
  }
  if (isLoggingOut)
    return (
      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center backdrop-blur-md">
        <Spinner />
      </div>
    );
  return (
    <Link to="" className="navlink group" onClick={handleLogout}>
      <HiOutlineArrowRightOnRectangle
        className="group-hover:text-red-500"
        id="logout"
      />
      <span>Logout</span>
    </Link>
  );
};

export default Logout;
