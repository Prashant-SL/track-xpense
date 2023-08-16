import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTransaction from "./components/AddTransaction";
import Dashboard from "./components/Dashboard";
import Menubar from "./components/Menubar";
import Income from "./components/Income";
import Expense from "./components/Expense";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        Home
      </Route>
      <Route path="/menubar" element={<Menubar/>}></Route>
      <Route path="add-transaction" element={<AddTransaction />}>
        <Route path="income" element={<Income />} />
        <Route path="expense" element={<Expense />} />
      </Route>
    </Routes>
  );
};

export default Router;
