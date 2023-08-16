import React from "react";
import { Route, Routes } from "react-router-dom";
import AddTransaction from "./components/AddTransaction";
import Dashboard from "./components/Dashboard";
import Menubar from "./components/Menubar";

const Router = () => {
  return (
    <Routes>
      <Route path="/add-transaction" element={<AddTransaction />}>
        Add Transaction
      </Route>
      <Route path="/" element={<Dashboard />}>
        Home
      </Route>
      <Route path="/menubar" element={<Menubar/>}></Route>
    </Routes>
  );
};

export default Router;
