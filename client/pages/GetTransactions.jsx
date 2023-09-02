import { useState, useEffect } from "react";
import * as URLHelpers from "../src/helpers/URLHelpers";
import axios from "axios";
import TransactionList from "../src/components/transaction/TransactionList";
import NoContent from "../src/components/NoContent";

const GetTransactions = () => {
  const [filterValue, setFilterValue] = useState("");
  const [allTransactions, setAllTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const { data } = await axios.get(
        `${URLHelpers.backendURL}/transactions/get-transactions`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (data) {
        setAllTransactions(
          filterValue.length > 0
            ? data.filter((data) => data.type == filterValue)
            : data
        );
      }
      return data;
    };
    fetchTransactions();
  }, [filterValue]);

  return (
    <>
      {allTransactions.length == 0 ? (
        <div className="text-center">
          <NoContent />
        </div>
      ) : (
        <>
          <p className="text-primary-600 text-xl px-5 font-semibold my-4">
            All Transactions
          </p>
          <div className="w-11/12 mx-auto mb-2">
            <label className="block text-sm px-1 text-primary-900 font-medium mb-2">
              Filter by
            </label>
            <select
              onChange={(e) => setFilterValue(e.target.value)}
              id="hs-select-label"
              className="py-3 px-4 pr-9 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Default</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </>
      )}
      {allTransactions?.map((transaction) => (
        <TransactionList transactionData={transaction} key={transaction._id} />
      ))}
    </>
  );
};

export default GetTransactions;
