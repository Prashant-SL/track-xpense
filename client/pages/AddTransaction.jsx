import React from "react";
import { Outlet } from "react-router";

const AddTransaction = () => {
  return (
    <div>
      add transaction
      <Outlet />
    </div>
  );
};

export default AddTransaction;
