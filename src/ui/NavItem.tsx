import { ComponentType, SVGAttributes } from "react";
import { NavLink } from "react-router-dom";
import { useMenuToggle } from "../context/MenuToggleContext";

interface INavItems {
  to: string;
  label: string;
  Icon: ComponentType<SVGAttributes<SVGElement>>;
}

const NavItem = ({ to, label, Icon }: INavItems) => {
  const { setIsSidebarOpen } = useMenuToggle();

  const handleClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <li onClick={handleClick}>
      <NavLink to={to} className="navlink group">
        <Icon className="group-hover:text-brand-500" />
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
