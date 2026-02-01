const CategorySummary = ({ expenses }) => {
  const summary = {};

  expenses.forEach(e => {
    summary[e.title] = (summary[e.title] || 0) + e.amount;
  });

  return (
    <div className="card">
      <h3>Category Summary</h3>
      {Object.entries(summary).map(([cat, amt]) => (
        <p key={cat}>{cat}: ₹{amt}</p>
      ))}
    </div>
  );
};

export default CategorySummary;
