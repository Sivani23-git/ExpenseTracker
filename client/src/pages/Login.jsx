import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-page">
      <div className="container" style={{ padding: "40px 0" }}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <div className="grid" style={{ marginBottom: "30px" }}>
          <div className="card">Secure Login</div>
          <div className="card">Local Data Storage</div>
          <div className="card">Fast Access</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr",
            gap: "20px",
          }}
        >
          <div className="card">
            <h3 style={{ marginBottom: "15px" }}>Welcome Back</h3>
            <p style={{ color: "#94a3b8" }}>
              Please login to continue managing your expenses.
            </p>
          </div>

          <div className="card">
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
              onClick={() => navigate("/dashboard")}
            >
              Login
            </button>

            <p style={{ textAlign: "center", margin: 0 }}>
              New user? <Link to="/register">Create account</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
