import Navbar from "../components/Navbar";

export default function Profile() {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const total = expenses.reduce((s, e) => s + e.amount, 0);

  return (
    <>
      <Navbar />
      <div className="bg-page">
        <div className="container" style={{ padding: "40px 0" }}>
          <h2>Profile</h2>

          <div
            className="grid"
            style={{ marginTop: "20px", gridTemplateColumns: "1fr 1fr" }}
          >
            <div className="card">
              <h3>User Info</h3>
              <p>Name: Sivani</p>
              <p>Email: user@gmail.com</p>
            </div>

            <div className="card">
              <h3>Expense Summary</h3>
              <p>Total Expenses: ₹{total}</p>
              <p>Total Categories: {expenses.length}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
