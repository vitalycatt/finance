import NavItem from "../../molecules/NavItem";
import { HiHome, HiFolder, HiChartBar } from "react-icons/hi";
import { MdAccountBalanceWallet, MdList } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <NavItem
            to="/budgets"
            icon={<MdAccountBalanceWallet />}
            label="Бюджеты"
          />
          <NavItem to="/categories" icon={<HiFolder />} label="Категории" />
          <NavItem to="/" end icon={<HiHome />} label="Главная" />
          <NavItem
            to="/transactions"
            icon={<MdList />}
            label="Расходы/Доходы"
          />
          <NavItem to="/statistics" icon={<HiChartBar />} label="Статистика" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
