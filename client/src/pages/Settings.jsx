// import Navbar from "../components/Navbar";

// export default function Settings() {
//   const clearData = () => {
//     localStorage.removeItem("expenses");
//     alert("All expense data cleared");
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-page">
//         <div className="container" style={{ padding: "40px 0" }}>
//           <h2>Settings</h2>

//           <div className="grid" style={{ marginTop: "20px" }}>
//             <div className="card">
//               <h3>Data Control</h3>
//               <p>Clear all stored expense data from this device.</p>
//               <button onClick={clearData}>Reset Expenses</button>
//             </div>

//             <div className="card">
//               <h3>App Info</h3>
//               <p>Expense Tracker v1.0</p>
//               <p>Frontend-only project</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Settings() {
  const [currency, setCurrency] = useState("INR");
  const [theme, setTheme] = useState("Dark");
  const [trackingMode, setTrackingMode] = useState("Manual");

  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  const total = expenses.reduce((s, e) => s + e.amount, 0);

  const clearData = () => {
    localStorage.removeItem("expenses");
    alert("All expense data cleared");
  };

  const logout = () => {
    alert("Logged out successfully");
  };

  const exportData = () => {
    const data = JSON.stringify(expenses, null, 2);
    alert("Export preview:\n\n" + data);
  };

  return (
    <>
      <Navbar />

      <div className="bg-page">
        <div className="container" style={{ padding: "40px 0" }}>
          <h2 style={{ marginBottom: "20px" }}>Settings</h2>

          {/* DASHBOARD-STYLE SUMMARY */}
          <div className="grid" style={{ marginBottom: "30px" }}>
            <div className="card">
              <h3>Total Spent</h3>
              <p>₹{total}</p>
            </div>
            <div className="card">
              <h3>Total Entries</h3>
              <p>{expenses.length}</p>
            </div>
            <div className="card">
              <h3>Storage</h3>
              <p>Local Browser</p>
            </div>
          </div>

{/* MAIN SETTINGS */}
<div className="grid">
  {/* ACCOUNT */}
  

  {/* DATA CONTROL */}
  <div className="card">
    <h3>Data Control</h3>
    <p>Manage stored expense records.</p>
    <button onClick={clearData}>Reset Expenses</button>
    <button onClick={exportData} style={{ marginTop: "10px" }}>
      Export Data
    </button>
  </div>

  {/* PREFERENCES */}
  


  {/* SECURITY
  <div className="card">
    <h3>Security</h3>
    <p>Password: ********</p>
    <p>Session: Active</p>
    <button>Change Password</button>
  </div> */}
  {/* USAGE OVERVIEW */}
  <div className="card">
    <h3>Usage Overview</h3>
    <p>Total Expenses Recorded: {expenses.length}</p>
    <p>Total Amount Spent: ₹{total}</p>
    <p>Tracking Active Since: This Session</p>
  </div>

  {/* SYSTEM STATUS */}
  {/* <div className="card">
    <h3>System Status</h3>
    <p>Application: Running</p>
    <p>Environment: Development</p>
    <p>Storage: Local Browser Storage</p>
  </div> */}

  {/* NOTIFICATIONS */}
  <div className="card">
    <h3>Notifications</h3>
    <p>Expense Alerts: Enabled</p>
    <p>Monthly Summary: Enabled</p>
    <p>Email Alerts: Disabled</p>
  </div>
  <div className="card">
    <h3>About App</h3>
    <p>Expense Tracker v1.0</p>
    <p>React + LocalStorage</p>
    <p>Academic / Internship Project</p>
  </div>
</div>
        </div>
      </div>
    </>
  );
}
