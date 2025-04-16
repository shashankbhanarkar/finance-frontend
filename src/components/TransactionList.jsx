import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("/transactions");
      setTransactions(res.data);
    } catch (err) {
      console.error("Error fetching transactions:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`/transactions/${id}`);
      setTransactions((prev) => prev.filter((t) => t._id !== id));
    } catch (err) {
      console.error("Error deleting transaction:", err);
    }
  };

  return (
    <div className="card card-body">
      <h4>All Transactions</h4>
      <ul className="list-group">
        {transactions.map((tx) => (
          <li
            key={tx._id}
            className="list-group-item d-flex justify-content-between align-items-center shadow-sm mb-2"
          >
            <div>
              <strong>${tx.amount}</strong> | {tx.date} <br />
              <span>{tx.description}</span>
              {tx.category && (
                <span className="badge bg-secondary ms-2">{tx.category}</span>
              )}
            </div>
            <div>
              <Link
                to={`/edit/${tx._id}`}
                className="btn btn-primary btn-sm me-2"
              >
                Edit
              </Link>
              <button
                onClick={() => deleteTransaction(tx._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;