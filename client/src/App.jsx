import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import Finance from "./pages/Finance";
import MonthlySummary from "./pages/MonthlySummary";
import CategorySummary from "./pages/CategorySummary";
import Wallets from "./pages/Wallets";
import IncomeVsExpense from "./pages/IncomeVsExpense";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />

        <Route path="/finance" element={<Finance />} />
        <Route path="/monthly-summary" element={<MonthlySummary />} />
        <Route path="/category-summary" element={<CategorySummary />} />
        <Route path="/wallets" element={<Wallets />} />
        <Route path="/income-vs-expense" element={<IncomeVsExpense />} />
      </Routes>
    </BrowserRouter>
  );
}
