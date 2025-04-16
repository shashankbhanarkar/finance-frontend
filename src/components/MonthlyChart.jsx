import React, { useEffect, useState } from "react";
import axios from "../axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const MonthlyChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const res = await axios.get("/transactions");
      const grouped = {};

      res.data.forEach((t) => {
        const month = new Date(t.date).toLocaleString("default", { month: "short", year: "numeric" });
        grouped[month] = (grouped[month] || 0) + parseFloat(t.amount);
      });

      const formatted = Object.entries(grouped).map(([month, amount]) => ({ month, amount }));
      setChartData(formatted);
    };
    fetchTransactions();
  }, []);

  return (
    <div className="card card-body mt-4 shadow-sm">
      <h4 className="mb-3 text-center">Monthly Expenses</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" />
          <Bar dataKey="amount" fill="#007bff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
