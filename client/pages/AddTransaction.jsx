import { Outlet } from "react-router";
import { BankIcon } from "../src/svg";
import TransactionButton from "../src/components/transaction/TransactionButton";
import { Link } from "react-router-dom";

const AddTransaction = () => {
  return (
    <div className="relative h-full">
      <img src={BankIcon} className="px-12 mt-2" />
      <p className="text-2xl pl-4 text-primary-600 font-semibold my-2 leading-8">
        What kind of <br />
        transaction is this?
      </p>
      <div className="flex w-full justify-around">
        <TransactionButton
          // onClick={onClick}
          transactionData={{ type: "income", width: "medium" }}
        />
        <TransactionButton
          // onClick={onClick}
          transactionData={{ type: "expense", width: "medium" }}
        />
      </div>
      <Link to="/">
        <button
          type="submit"
          className="w-11/12 ml-4 absolute bottom-4 flex items-center gap-x-2 text-white bg-primary-800 font-medium rounded-lg text-sm justify-center px-4 py-2.5 text-center"
        >
          Cancel / Go Back Home
        </button>
      </Link>
      <Outlet />
    </div>
  );
};

export default AddTransaction;
