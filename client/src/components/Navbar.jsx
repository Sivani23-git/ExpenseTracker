import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 30px",
        background: "rgba(2,6,23,0.9)",
      }}
    >
      <h3>💰 Expense Tracker</h3>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/settings">Settings</Link>
        <button onClick={() => navigate("/login")}>Logout</button>
      </div>
    </div>
  );
}
