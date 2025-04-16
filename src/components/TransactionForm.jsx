import React, { useState } from "react";
import axios from "../axios";

const TransactionForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    amount: "",
    date: "",
    description: "",
    category: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.amount || !form.date || !form.description) return;
    try {
      const res = await axios.post("/transactions", form);
      onAdd(res.data);
      setForm({ amount: "", date: "", description: "", category: "" });
    } catch (err) {
      console.error("Error adding transaction:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body mb-4 shadow-sm">
      <h4 className="mb-3">Add Transaction</h4>
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <input
          name="amount"
          type="number"
          className="form-control"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          name="date"
          type="date"
          className="form-control"
          value={form.date}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          name="description"
          type="text"
          className="form-control"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          name="category"
          type="text"
          className="form-control"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
