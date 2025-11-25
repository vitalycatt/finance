import { PageLayout } from "@/components/templates";
import { Routes, Route } from "react-router-dom";
import { Home, Budgets, Categories, Transactions, Statistics } from "@/pages";

function App() {
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
