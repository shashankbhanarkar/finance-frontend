import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import MonthlyChart from "../components/MonthlyChart";

const Home = () => {
  return (
    <div className="container py-4">
      {/* Page Title */}
      <div className="text-center mb-4">
        <h2 className="display-5 fw-bold">💸 Personal Finance Visualizer</h2>
        <p className="text-muted">Track your expenses and visualize your spending habits</p>
      </div>

      <div className="row g-4">
        {/* Transaction Form */}
        <div className="col-md-5">
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-primary">Add Transaction</h5>
              <p className="text-muted small">Quickly add a new transaction to your list</p>
              <TransactionForm />
            </div>
          </div>
        </div>

        {/* Transaction List */}
        <div className="col-md-7">
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h5 className="card-title text-primary">All Transactions</h5>
              <p className="text-muted small">View, edit, or delete your transactions</p>
              <TransactionList />
            </div>
          </div>

          {/* Monthly Chart */}
          <div className="card shadow-sm border-0">
            <div className="card-body">
              <h5 className="card-title text-primary">Monthly Expenses</h5>
              <p className="text-muted small">Visualize your spending trends over time</p>
              <MonthlyChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;