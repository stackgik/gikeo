import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="col-start-2 row-start-3 text-center py-8 text-[1.4rem] text-grey-600 dark:text-dark-grey-600 bg-grey-100 dark:bg-dark-grey-100">
      <span>Designed and Developed by </span>
      <Link
        to="https://github.com/stackgik/"
        target="_blank"
        className="text-brand-500"
      >
        Stackgik
      </Link>
    </div>
  );
};

export default Footer;
