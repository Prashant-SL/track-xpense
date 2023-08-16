import React from "react";
import TransactionButton from "./transaction/TransactionButton";
import TransactionGraph from "./transaction/TransactionGraph";
import TransactionList from "./transaction/TransactionList";

const Dashboard = () => {
  return (
    <div className="mx-auto w-max text-center bg-gradient-to-t from-transparent to-[#FFF6E5]">
      <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-35px] pb-6 rounded-b-3xl">
        <div className="flex items-end border px-4">
          <img
            src="http://via.placeholder.com/50"
            className="rounded-full border h-10"
            width="40px"
          />
          <div className="w-3/6">
            <h2 className="mt-4 text-left ml-3">
              Hi! user.name,
              <br /> Welcome!
            </h2>
          </div>
        </div>

        <div className="mt-4 leading-[50px]">
          <p className="text-sm">Available Balance</p>
          <h2 className="text-[40px] text-black font-semibold">$9400</h2>
        </div>

        <div className="flex gap-4 my-4 justify-center">
          <TransactionButton transactionType="income" />
          <TransactionButton />
        </div>
      </div>

      {/* Graph */}
      <TransactionGraph />

      <TransactionList />
    </div>
  );
};

export default Dashboard;
