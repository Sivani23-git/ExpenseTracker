import { useState, useEffect } from "react";
import ExpenseCard from "../components/ExpenseCard";
import Navbar from "../components/Navbar";
import MonthlySummary from "./MonthlySummary";
import CategorySummary from "./CategorySummary";
import Wallets from "./Wallets";
import IncomeVsExpense from "./IncomeVsExpense";

const icons = {
  food: "🍔",
  travel: "🚕",
  recharge: "📱",
  shopping: "🛍️",
  default: "💸",
};

export default function Dashboard() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved
      ? JSON.parse(saved)
      : [
          { title: "Food", amount: 450 },
          { title: "Travel", amount: 1200 },
          { title: "Mobile Recharge", amount: 399 },
        ];
  });

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [showFinance, setShowFinance] = useState(false);

  const income = 45000;
  const totalExpense = transactions.reduce((s, t) => s + t.amount, 0);
  const balance = income - totalExpense;

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(transactions));
  }, [transactions]);

  const addExpense = () => {
    if (!title || !amount) return;
    setTransactions([{ title, amount: Number(amount) }, ...transactions]);
    setTitle("");
    setAmount("");
  };

  const deleteExpense = (i) => {
    setTransactions(transactions.filter((_, idx) => idx !== i));
  };

  const clearAll = () => setTransactions([]);

  const getIcon = (title) => {
    const key = title.toLowerCase();
    return (
      Object.keys(icons).find((k) => key.includes(k)) &&
      icons[Object.keys(icons).find((k) => key.includes(k))]
    ) || icons.default;
  };

  return (
    <>
      <Navbar />

      <div className="bg-page">
        <div className="container">
          <h2>Dashboard</h2>

          {/* SUMMARY CARDS */}
          <div className="grid">
            <ExpenseCard title="Income" amount={`₹${income}`} />
            <ExpenseCard title="Expenses" amount={`₹${totalExpense}`} />
            <ExpenseCard title="Balance" amount={`₹${balance}`} />
          </div>

          <button
            style={{ margin: "20px 0" }}
            onClick={() => setShowFinance(!showFinance)}
          >
            Financial Overview
          </button>

          {/* TRANSACTIONS + ADD EXPENSE */}
          {!showFinance && (
            <div className="dashboard-grid">
              <div className="card">
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <h3>Recent Transactions</h3>
                  {transactions.length > 0 && (
                    <button onClick={clearAll}>Clear All</button>
                  )}
                </div>

                <ul style={{ listStyle: "none", marginTop: "15px" }}>
                  {transactions.map((t, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <span>{getIcon(t.title)} {t.title}</span>
                      <span>
                        - ₹{t.amount}
                        <button onClick={() => deleteExpense(i)}> ❌</button>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card">
                <h3>Add Expense</h3>

                <input
                  placeholder="Expense Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <button onClick={addExpense}>Add</button>
              </div>
            </div>
          )}

          {/* FINANCIAL OVERVIEW */}
          {showFinance && (
            <div className="grid">
              <MonthlySummary expenses={transactions} />
              <CategorySummary expenses={transactions} />
              <Wallets />
              <IncomeVsExpense expenses={transactions} income={income} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
