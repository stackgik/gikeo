import { ComponentType, SVGAttributes } from "react";
import { NavLink } from "react-router-dom";

interface INavItems {
  to: string;
  label: string;
  Icon: ComponentType<SVGAttributes<SVGElement>>;
}

const NavItem = ({ to, label, Icon }: INavItems) => {
  return (
    <li>
      <NavLink to={to} className="navlink group">
        <Icon className="group-hover:text-brand-500" />
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
