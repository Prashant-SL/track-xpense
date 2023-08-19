import React from "react";
import { CurrencySVG, UpArrowSVG, DownArrowSVG } from "../../svg/index";

const TransactionButton = ({ transactionType = "expense" }) => {
  const transactionName = {
    income: "Income",
    expense: "Expense",
  };

  const bgColor =
    transactionType === "income" ? "bg-[#00A86B]" : "bg-[#FD5662]";

  const arrowType = transactionType === "income" ? UpArrowSVG : DownArrowSVG;

  return (
    <div
      className={`w-[160px] gap-y-2 h-40 rounded-2xl justify-center items-center ${bgColor} flex flex-col`}
    >
      <div className="bg-white rounded-xl p-1.5 w-20 flex">
        <img src={CurrencySVG} className="w-12" />
        <img src={arrowType} width="25px" />
      </div>
      <div className="text-center text-white leading-8">
        <p className="text-sm">{transactionName[transactionType]}</p>
        <p className="text-[28px] font-semibold">
          <span className="font-medium">₹</span>100
        </p>
      </div>
    </div>
  );
};

export default TransactionButton;
