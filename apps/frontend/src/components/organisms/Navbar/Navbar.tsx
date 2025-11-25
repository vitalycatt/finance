import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HiHome, HiFolder, HiChartBar } from "react-icons/hi";
import { MdAccountBalanceWallet, MdList } from "react-icons/md";

import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui";
import { cn } from "@/lib/utils";
import "./Navbar.css";

type NavEntry = {
  to: string;
  label: string;
  icon: ReactNode;
  exact?: boolean;
};

const NAV_ITEMS: NavEntry[] = [
  { to: "/budgets", label: "Бюджеты", icon: <MdAccountBalanceWallet /> },
  { to: "/categories", label: "Категории", icon: <HiFolder /> },
  { to: "/", label: "Главная", icon: <HiHome />, exact: true },
  { to: "/transactions", label: "Расходы/Доходы", icon: <MdList /> },
  { to: "/statistics", label: "Статистика", icon: <HiChartBar /> },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string, exact?: boolean) => {
    if (exact) {
      return location.pathname === path;
    }
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Menubar className="nav-menubar">
          {NAV_ITEMS.map((item) => (
            <MenubarMenu key={item.to}>
              <MenubarTrigger
                className={cn(
                  "nav-menubar__trigger",
                  isActive(item.to, item.exact) &&
                    "nav-menubar__trigger--active"
                )}
                onClick={() => navigate(item.to)}
              >
                <span className="nav-menubar__icon">{item.icon}</span>
              </MenubarTrigger>
            </MenubarMenu>
          ))}
        </Menubar>
      </div>
    </nav>
  );
};

export default Navbar;
