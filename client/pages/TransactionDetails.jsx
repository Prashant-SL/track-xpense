import PropTypes from "prop-types";
import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  incomeCategory,
  expenseCategory,
} from "../data/transaction-category-data";
import axios from "axios";
import { backendURL } from "../src/helpers/URLHelpers";
import { useNavigate } from "react-router";

const TransactionDetails = ({ transactionType }) => {
  const { type } = transactionType;
  const formRef = useRef("");
  const [inputValues, setInputValues] = useState({
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const inputData = {
      type,
      amount: formData.get("amount"),
      category: formData.get("category"),
      description: formData.get("description"),
      date: formData.get("date"),
    };
    const headers = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    try {
      const { data, status } = await axios.post(
        `${backendURL}/transactions/add-transaction`,
        inputData,
        headers
      );
      if (status == 200 || status == 201) {
        toast.success(data.message);
        setTimeout(() => {
          setInputValues({
            amount: "",
            category: "",
            description: "",
            date: "",
          });
        }, 1500);
      }
    } catch (error) {
      error.response.data === "jwt expired"
        ? (() => {
            toast.error("Session logged out! Please login");
            setTimeout(() => {
              navigate("/login");
            }, 2500);
          })()
        : toast.error("jwt expired" || error.message);
    }
  };

  const mapTransactionCategory = () => {
    const mapCategory = type == "expense" ? expenseCategory : incomeCategory;

    return mapCategory.map((category) => (
      <option
        className="mx-auto flex flex-col"
        key={category.label}
        value={category.label}
        onChange={(e) =>
          setInputValues({ ...inputValues, category: e.target.value })
        }
      >
        {category.label}
      </option>
    ));
  };

  return (
    <>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-11/12 mx-auto flex flex-col gap-y-3"
      >
        <p className="text-left text-lg mt-4 text-primary-700 font-semibold">
          Enter transaction details
        </p>
        <input
          name="amount"
          type="number"
          value={inputValues.amount}
          onChange={(e) =>
            setInputValues({ ...inputValues, amount: e.target.value })
          }
          className="border w-full p-2 rounded-md"
          placeholder="Amount"
          required
        />
        <div className="flex justify-between gap-2">
          <select
            name="category"
            required
            className="border w-full p-2 rounded-md"
          >
            <option className="mx-auto flex flex-col" value="Other">
              Select Category
            </option>
            {mapTransactionCategory()}
          </select>
          <input
            type="text"
            required
            name="description"
            value={inputValues.description}
            onChange={(e) =>
              setInputValues({ ...inputValues, description: e.target.value })
            }
            className="border w-full p-2 rounded-md"
            placeholder="Description"
          />
        </div>
        <input
          type="date"
          required
          value={inputValues.date}
          name="date"
          onChange={(e) =>
            setInputValues({ ...inputValues, date: e.target.value })
          }
          className="border w-full p-2 rounded-md"
        />
        <button
          type="submit"
          className="flex gap-x-2 text-white w-full bg-primary-500 hover:bg-primary-800 font-medium rounded-lg text-sm justify-center px-5 py-2.5 text-center"
        >
          Submit
        </button>
        <Toaster />
      </form>
    </>
  );
};

TransactionDetails.propTypes = {
  transactionType: PropTypes.object,
};

export default TransactionDetails;
