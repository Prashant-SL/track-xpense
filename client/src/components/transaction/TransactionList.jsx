import React from "react";
import { CurrencySVG } from "../../../public/svg/index";

const TransactionList = ({ transactionType = "expense" }) => {
  const transnAmtColor =
    transactionType === "expense" ? "text-[#F83D3E]" : "text-[#1ab289]";

  return (
    <div className="flex flex-col">
      <div className="flex my-2 w-max px-4 justify-between items-center">
        <p className="font-medium">Recent Transaction</p>
        <button className="bg-purple-50 text-xs text-purple-800 px-4 py-2 rounded-2xl">
          See All
        </button>
      </div>

      {/* Transaction columns */}
      <div className="bg-[#F9F9F9] gap-2 border flex w-95p p-2 mx-auto rounded-2xl items-center">
        <img src={CurrencySVG} className="w-[15%] p-1" />
        <div className="flex flex-col w-[65%] text-left">
          <p className="font-semibold text-sm">Transn Category</p>
          <p className="text-xs h-4 overflow-hidden">Transaction Reason Here</p>
        </div>
        <div className="flex flex-col text-left">
          <p className={`font-semibold text-sm ${transnAmtColor}`}>Amount</p>
          <p className="text-xs">04/09/2000</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
