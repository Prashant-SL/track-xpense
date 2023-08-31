import PropTypes from "prop-types";
import {
  incomeCategory,
  expenseCategory,
} from "../../../data/transaction-category-data";
import { DeleteSVG } from "../../svg";
import axios from "axios";
import * as URLHelpers from "../../helpers/URLHelpers";
import { toast, Toaster } from "react-hot-toast";

const TransactionList = ({ transactionData }) => {
  const handleButtons = async (id) => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { status } = await axios.delete(
        `${URLHelpers.backendURL}/transactions/delete-transaction/${id}`,
        headers
      );

      if (status == 200 || status == 201) {
        toast.success("Transaction Deleted!");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      toast.error(error.messagge || error);
    }
  };
  const { type, amount, category, description, date, _id } = transactionData;
  const refactoredDate = date.split("T")[0].split("-").reverse().join("/");

  const transnAmtColor =
    type === "expense" ? "text-[#F83D3E]" : "text-[#1ab289]";

  const transactionImg = [...incomeCategory, ...expenseCategory].find((img) => {
    if (img.label == category) return img?.img;
  });

  return (
    <div className="flex bg-[#F9F9F9] gap-2 mt-2 w-95p p-3 mx-auto rounded-2xl justify-between items-center">
      <img
        src={transactionImg?.img}
        className="bg-purple-100 rounded-xl p-2 mr-2 w-10"
      />
      <div className="flex flex-col w-1/2 text-left">
        <p className="font-semibold text-sm text-primary-700 mb-1">
          {category}
        </p>
        <p className="text-xs h-4 overflow-hidden text-primary-950">
          {description}
        </p>
      </div>
      <div className="flex flex-col text-left mr-1">
        <p className={`font-semibold text-sm mb-1 ${transnAmtColor}`}>
          {amount}
        </p>
        <p className="text-xs">{refactoredDate}</p>
      </div>
      <button onClick={() => handleButtons(_id)}>
        <img width="18px" src={DeleteSVG} />
      </button>
      <Toaster />
    </div>
  );
};

TransactionList.propTypes = {
  transactionData: PropTypes.object,
};

export default TransactionList;
