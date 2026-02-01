import { useNavigate } from "react-router-dom";
import "./Finance.css";

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="finance-page">
      <h1>Financial Overview</h1>

      <div className="finance-cards">
        <div onClick={() => navigate("/monthly-summary")}>
          Monthly Summary
        </div>

        <div onClick={() => navigate("/category-summary")}>
          Category Summary
        </div>

        <div onClick={() => navigate("/wallets")}>
          Wallets / Accounts
        </div>

        <div onClick={() => navigate("/income-vs-expense")}>
          Income vs Expense
        </div>
      </div>
    </div>
  );
}
