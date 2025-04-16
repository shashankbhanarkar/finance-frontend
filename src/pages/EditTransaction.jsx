import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../axios";

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    amount: "",
    date: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/transactions/${id}`);
        setForm(res.data);
      } catch (err) {
        console.error("Error fetching transaction:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/transactions/${id}`, form);
    navigate("/");
  };

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="text-center mb-4">Edit Transaction</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
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
                <button className="btn btn-success w-100">Update Transaction</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTransaction;