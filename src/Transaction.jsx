import { useState } from "react";
import { Link } from "react-router-dom";

const Transaction = ({ onAddTransaction }) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleItemChange = (event) => {
    setItem(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddTransaction(item, amount); // Pass the data to the parent component (App) via the callback prop.
    setItem("");
    setAmount("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen-[50]">
      {/* Center the form vertically and horizontally */}
      <form onSubmit={handleSubmit} className="w-96 p-8 bg-slate-200 rounded shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            id="item"
            value={item}
            onChange={handleItemChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter item name"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Enter amount"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Add Transaction
        </button>
      </form>

      <Link
        to="/"
        className="py-3 px-6 text-white bg-purple-500 rounded-md hover:bg-purple-600 transition duration-300 mt-10"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Transaction;
