import React from "react";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";
import TransactionCategory from "./TransactionCategory";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline border-2">Dashboard</h1>
      <Link to="/add-transaction">AddTransaction</Link>
      <Menubar />
      <h1 className="">
        Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard Dashboard
      </h1>
    </div>
  );
};

export default Dashboard;
