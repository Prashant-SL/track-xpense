import React, { useState } from "react";
import {
  incomeCategory,
  expenseCategory,
} from "../data/transaction-category-data";

const TransactionCategory = ({ transactionType = "expense" }) => {
  const mapCategory =
    transactionType == "expense" ? expenseCategory : incomeCategory;

  return (
    <>
      <p className="text-sm mb-1">Choose Category</p>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-4 gap-3"
      >
        {mapCategory.map((e) => {
          return (
            <button className="mx-auto flex flex-col">
              <div className="h-14 w-16 mx-auto bg-primary-100 rounded">
                <img className="mx-auto pt-3" src={e.img} width="30px" />
              </div>
              <p className="mx-auto text-sm my-2">{e.label}</p>
            </button>
          );
        })}
      </form>
    </>
  );
};

export default TransactionCategory;
