const IncomeVsExpense = ({ expenses, income }) => {
  const totalExpense = expenses.reduce((s, e) => s + e.amount, 0);

  return (
    <div className="card">
      <h3>Income vs Expense</h3>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{totalExpense}</p>
      <p>Balance: ₹{income - totalExpense}</p>
    </div>
  );
};

export default IncomeVsExpense;
