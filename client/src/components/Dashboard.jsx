import React from "react";
import { Link } from "react-router-dom";
import Menubar from "./Menubar";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline border-2">Dashboard</h1>
      <Link to="/add-transaction">AddTransaction</Link>
      <Menubar />
    </div>
  );
};

export default Dashboard;
