const MonthlySummary = ({ expenses }) => {
  const total = expenses.reduce((s, e) => s + e.amount, 0);

  return (
    <div className="card">
      <h3>Monthly Summary</h3>
      <p>Total Spent This Month: ₹{total}</p>
    </div>
  );
};

export default MonthlySummary;
