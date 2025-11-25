import { Outlet } from "react-router-dom";
import Navbar from "../../organisms/Navbar";
import "./PageLayout.css";

const PageLayout = () => {
  return (
    <div className="page-layout">
      <main className="main-content">
        <Outlet />
      </main>

      <Navbar />
    </div>
  );
};

export default PageLayout;
