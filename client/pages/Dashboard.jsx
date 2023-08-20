import React from "react";
import Menubar from "../src/components/Menubar";
import TransactionButton from "../src/components/transaction/TransactionButton";
import TransactionGraph from "../src/components/transaction/TransactionGraph";
import TransactionList from "../src/components/transaction/TransactionList";

const Dashboard = () => {
  return (
    <div className="mx-auto w-max text-center ">
      <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-35px] bg-gradient-to-b from-transparent to-purple-50 pb-6 rounded-3xl">
        <div className="flex items-end px-4">
          <img
            src="/public/assets/TrackXpenseLogo.png"
            width="40px"
            className="rounded-50 border"
          />
          <h2 className="mt-4 text-left ml-3">
            Hi! user.name,
            <br /> Welcome!
          </h2>
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

      {/* Recent Transaction's list */}
      <>
        <div className="flex my-2 w-max px-4 justify-between items-center">
          <p className="font-medium">Recent Transaction</p>
          <button className="bg-[#FCFCFC] text-xs text-purple-800 px-4 py-2 rounded-2xl">
            See All
          </button>
        </div>
        <TransactionList />
        <TransactionList /><TransactionList /><TransactionList /><TransactionList /><TransactionList /><TransactionList /><TransactionList /><TransactionList /><TransactionList />
      </>
      <Menubar />
    </div>
  );
};

export default Dashboard;
