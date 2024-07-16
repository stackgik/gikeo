import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/dashboard"} className="mx-auto mb-20 block py-4 text-center">
      <img src="/gikeo-logo.png" alt="Logo" className="h-[80px] w-auto" />
    </Link>
  );
};

export default Logo;
