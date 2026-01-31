import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="bg-page">
      <div className="container" style={{ padding: "40px 0" }}>
        <h2 style={{ marginBottom: "20px" }}>Create Account</h2>

        <div className="grid" style={{ marginBottom: "30px" }}>
          <div className="card">Quick Setup</div>
          <div className="card">Expense Categories</div>
          <div className="card">Dashboard Insights</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "20px",
          }}
        >
          <div className="card">
            <h3 style={{ marginBottom: "15px" }}>Get Started</h3>
            <p style={{ color: "#94a3b8" }}>
              Create your account to start tracking expenses.
            </p>
          </div>

          {/* RIGHT REGISTER FORM */}
          <div className="card">
            <input
              placeholder="Full Name"
              style={{ width: "100%", marginBottom: "15px" }}
            />
            <input
              placeholder="Email"
              style={{ width: "100%", marginBottom: "15px" }}
            />
            <input
              type="password"
              placeholder="Password"
              style={{ width: "100%", marginBottom: "20px" }}
            />

            <button
              style={{ width: "100%", marginBottom: "15px" }}
              onClick={() => navigate("/login")}
            >
              Create Account
            </button>

            <p style={{ textAlign: "center", margin: 0 }}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}