import { CurrencySVG, UpArrowSVG, DownArrowSVG } from "../../svg/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TransactionButton = ({ transactionData, lastTrasaction }) => {
  const transactionName = {
    income: lastTrasaction ? lastTrasaction : "Income",
    expense: lastTrasaction ? lastTrasaction : "Expense",
  };

  const { type, amount } = transactionData;

  const bgColor = type === "income" ? "bg-[#00A86B]" : "bg-[#FD5662]";
  const arrowType = type === "income" ? UpArrowSVG : DownArrowSVG;

  return (
    <Link to={type}>
      <div
        className={`w-[160px] h-24 gap-y-2 rounded-2xl justify-center items-center ${bgColor} flex flex-col`}
      >
        <div className="bg-white rounded-xl p-1.5 w-20 flex">
          <img src={CurrencySVG} className="w-10" />
          <img src={arrowType} width="25px" />
        </div>
        <div className="text-center text-white leading-8">
          <p className="text-sm">{transactionName[type]}</p>
          {amount && (
            <p className="text-[28px] font-semibold">
              <span className="font-medium">₹</span>
              {amount}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

TransactionButton.propTypes = {
  transactionData: PropTypes.object,
  lastTrasaction: PropTypes.string,
};

export default TransactionButton;
