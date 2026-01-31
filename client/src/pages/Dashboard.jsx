import { useState, useEffect } from "react";
import ExpenseCard from "../components/ExpenseCard";
import Navbar from "../components/Navbar";

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

  const income = 45000;
  const totalExpense = transactions.reduce((s, t) => s + t.amount, 0);
  const balance = income - totalExpense;

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(transactions));
  }, [transactions]);

  const addExpense = () => {
    if (!title || !amount) return;

    const amt = Number(amount);
    const index = transactions.findIndex(
      (t) => t.title.toLowerCase() === title.toLowerCase()
    );

    if (index !== -1) {
      const updated = [...transactions];
      updated[index].amount += amt;
      setTransactions(updated);
    } else {
      setTransactions([{ title, amount: amt }, ...transactions]);
    }

    setTitle("");
    setAmount("");
  };

  const deleteExpense = (i) => {
    setTransactions(transactions.filter((_, idx) => idx !== i));
  };

  const clearAll = () => {
    setTransactions([]);
  };

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
        <div className="container" style={{ padding: "30px 0" }}>
          <h2 style={{ marginBottom: "20px" }}>Dashboard</h2>

          {/* Summary */}
          <div className="grid" style={{ marginBottom: "30px" }}>
            <ExpenseCard title="Income" amount={`₹${income}`} />
            <ExpenseCard title="Expenses" amount={`₹${totalExpense}`} />
            <ExpenseCard title="Balance" amount={`₹${balance}`} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "20px",
            }}
          >
            {/* Transactions */}
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

            {/* Add Expense */}
            <div className="card">
              <h3 style={{ marginBottom: "15px" }}>Add Expense</h3>

              <input
                placeholder="Expense Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <input
                placeholder="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ width: "100%", marginBottom: "10px" }}
              />

              <button style={{ width: "100%" }} onClick={addExpense}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
