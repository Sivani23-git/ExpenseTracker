import Navbar from "../components/Navbar";

export default function Settings() {
  const clearData = () => {
    localStorage.removeItem("expenses");
    alert("All expense data cleared");
  };

  return (
    <>
      <Navbar />
      <div className="bg-page">
        <div className="container" style={{ padding: "40px 0" }}>
          <h2>Settings</h2>

          <div className="grid" style={{ marginTop: "20px" }}>
            <div className="card">
              <h3>Data Control</h3>
              <p>Clear all stored expense data from this device.</p>
              <button onClick={clearData}>Reset Expenses</button>
            </div>

            <div className="card">
              <h3>App Info</h3>
              <p>Expense Tracker v1.0</p>
              <p>Frontend-only project</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
