import Navbar from "../components/Navbar";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {
    name: "Guest",
    email: "Not logged in",
  };

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const total = expenses.reduce((s, e) => s + e.amount, 0);

  return (
    <>
      <Navbar />

      <div className="bg-page">
        <div className="container" style={{ padding: "30px 0" }}>
          <h2 style={{ marginBottom: "20px" }}>Profile</h2>

          {/* TOP ROW – SAME AS DASHBOARD */}
          <div className="grid" style={{ marginBottom: "20px" }}>
            <div className="card">
              <h3>User</h3>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>

            <div className="card">
              <h3>Total Expenses</h3>
              <p>{expenses.length}</p>
            </div>

            <div className="card">
              <h3>Total Spent</h3>
              <p>₹{total}</p>
            </div>
          </div>

          {/* DETAILS ROW */}
          <div className="grid">
            <div className="card">
              <h3>Account Info</h3>
              <p>Status: Active</p>
              <p>Account Type: Standard</p>
            </div>

            <div className="card">
              <h3>Usage</h3>
              <p>Tracking Mode: Manual</p>
              <p>Storage: Local Browser</p>
            </div>

            <div className="card">
              <h3>Access</h3>
              <p>Dashboard: Enabled</p>
              <p>Settings: Enabled</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
