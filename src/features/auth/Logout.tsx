import { HiOutlineArrowRightOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
const Logout = () => {
  return (
    <Link to="/login" className="navlink group">
      <HiOutlineArrowRightOnRectangle
        className="group-hover:text-red-500"
        id="logout"
      />
      <span>Logout</span>
    </Link>
  );
};

export default Logout;
