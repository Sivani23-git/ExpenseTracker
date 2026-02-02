export default function ExpenseCard({ title, amount }) {
  return (
    <div className="card">
      <p>{title}</p>
      <h3>{amount}</h3>
    </div>
  )
}
