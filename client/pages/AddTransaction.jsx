import { Outlet } from "react-router";
import { BankIcon } from "../src/svg";
import TransactionButton from "../src/components/transaction/TransactionButton";

const AddTransaction = () => {
  return (
    <div className="h-maxM lg:h-maxD mb-10 lg:mb-4">
      <img src={BankIcon} className="px-16 mt-2" />
      <p className="text-2xl capitalize pl-4 text-primary-600 font-semibold my-2 leading-8">
        What kind of <br />
        transaction is this?
      </p>
      <div className="flex w-full justify-around">
        <TransactionButton transactionData={{ type: "income" }} />
        <TransactionButton transactionData={{ type: "expense" }} />
      </div>
      <Outlet />
    </div>
  );
};

export default AddTransaction;
