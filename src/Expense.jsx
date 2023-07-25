import { useState } from "react";

const Expense = ({ transactions }) => {
  const getTotalAmount = () => {
    return transactions.reduce((total, transaction) => total + Number(transaction.amount), 0);
  };

  const [income, setIncome] = useState("");
  const totalAmount = getTotalAmount();
  const remainingBalance = Number(income) - totalAmount;

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Expense List</h2>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="font-semibold">Item</div>
          <div className="font-semibold">Amount</div>
        </div>
        <ul className="space-y-2 ">
          {transactions.map((transaction, index) => (
            <li key={index} className="border-b pb-2 grid grid-cols-2 gap-4 mb-4">
              <div>{transaction.item}</div>
              <div>${transaction.amount}</div>
            </li>
          ))}
        </ul>
      </div>
      {transactions.length > 0 && (
        <div className="mt-4">
          <p className="mt-2">Total Expense: ${totalAmount}</p>
        </div>
      )}
      <div className="mt-4">
        <input
          type="number"
          value={income}
          onChange={handleIncomeChange}
          placeholder="Enter your income"
          className="border border-gray-400 px-2 py-1 rounded-md mr-2"
        />
      </div>
      <div className="mt-4">
        {income !== "" && <p className="mt-2">Your Balance Remaining: ${remainingBalance}</p>}
      </div>
    </div>
  );
};

export default Expense;
