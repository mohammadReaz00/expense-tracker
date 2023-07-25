import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import AppPage from "./AppPage";
import Transaction from "./Transaction";
import Expense from "./Expense";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (item, amount) => {
    const newTransaction = { item, amount };
    setTransactions([...transactions, newTransaction]);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="app" element={<AppPage />}>
            <Route path="transaction" element={<Transaction onAddTransaction={addTransaction} />} />
            <Route path="expense" element={<Expense transactions={transactions} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
