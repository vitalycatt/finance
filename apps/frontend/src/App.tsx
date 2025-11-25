import { Routes, Route } from "react-router-dom";
import PageLayout from "@/components/templates/PageLayout";
import { useTelegramFullscreen } from "@/hooks";
import { Home, Budgets, Categories, Transactions, Statistics } from "@/pages";

function App() {
  useTelegramFullscreen();

  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="categories" element={<Categories />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
}

export default App;
