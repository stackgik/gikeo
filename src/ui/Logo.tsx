import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/dashboard"} className="mx-auto block py-4 text-center PC:py-0">
      <img
        src="/new_logo.png"
        alt="Logo"
        className="h-[80px] w-auto PC:h-[60px] tablet:h-[50px]"
      />
    </Link>
  );
};

export default Logo;
