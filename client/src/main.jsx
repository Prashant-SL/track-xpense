import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddTransaction from "../pages/AddTransaction";
import Dashboard from "../pages/Dashboard";
import Income from "../pages/Income";
import Expense from "../pages/Expense";
import Login from "../pages/Login";
import Register from "../pages/Register";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="w-max h-max overflow-scroll no-scrollbar scroll-smooth border mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            Home
          </Route>
          <Route path="/add-transaction" element={<AddTransaction />}>
            <Route path="income" element={<Income />} />
            <Route path="expense" element={<Expense />} />
          </Route>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  </React.StrictMode>
);
