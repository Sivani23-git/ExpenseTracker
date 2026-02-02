import { useState, useEffect } from "react";

const Wallets = () => {
  const [wallets, setWallets] = useState(() => {
    const saved = localStorage.getItem("wallets");
    return saved ? JSON.parse(saved) : [];
  });

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    localStorage.setItem("wallets", JSON.stringify(wallets));
  }, [wallets]);

  const addWallet = () => {
    if (!name || !amount) return;

    setWallets([...wallets, { name, amount: Number(amount) }]);
    setName("");
    setAmount("");
  };

  return (
    <div className="card">
      <h3>Wallets / Accounts</h3>

      {wallets.length === 0 && <p>No wallets added</p>}

      {wallets.map((w, i) => (
        <p key={i}>
          {w.name}: ₹{w.amount}
        </p>
      ))}

      <input
        placeholder="Wallet Name (Cash, Bank, UPI...)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Initial Balance"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button onClick={addWallet}>Add Wallet</button>
    </div>
  );
};

export default Wallets;
