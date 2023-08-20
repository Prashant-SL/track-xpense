import React from "react";
import { IndianRupee } from "lucide-react";

const TransactionList = ({ transactionType = "expense" }) => {
  const transnAmtColor =
    transactionType === "expense" ? "text-[#F83D3E]" : "text-[#1ab289]";

  return (
    <div className="flex flex-col">
      {/* Transaction columns */}
      <div className="bg-[#F9F9F9] gap-2 mt-2 flex w-95p p-3 mx-auto rounded-2xl items-center">
        <div className="bg-purple-100 rounded-xl p-2 mr-2">
          <IndianRupee size={24} color="#7F3DFF" />
        </div>
        <div className="flex flex-col w-[65%] text-left">
          <p className="font-semibold text-sm">Education</p>
          <p className="text-xs h-4 overflow-hidden">Transaction Reason Here</p>
        </div>
        <div className="flex flex-col text-left">
          <p className={`font-semibold text-sm ${transnAmtColor}`}>10,000</p>
          <p className="text-xs">04/09/2000</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
