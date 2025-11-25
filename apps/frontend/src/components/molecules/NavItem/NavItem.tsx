import { NavLink } from "react-router-dom";
import "./NavItem.css";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  end?: boolean;
}

const NavItem = ({ to, icon, label, end = false }: NavItemProps) => {
  return (
    <li className="nav-item">
      <NavLink to={to} className="nav-link" end={end} title={label}>
        <span className="nav-icon">{icon}</span>
        <span className="nav-label">{label}</span>
      </NavLink>
    </li>
  );
};

export default NavItem;
