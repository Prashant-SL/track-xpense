import {
  AddTransactionSVG,
  Home2SVG,
  TransactionListSVG,
  UserSVG,
} from "../svg/index";
import { Link } from "react-router-dom";

const Footer = () => {
  const isLoggedIn = localStorage.getItem("token") ? true : false;

  return (
    <div className="flex bottom-0 lg:bottom-6 border-collapse fixed w-max border bg-white z-10 py-1 pt-2 pb-1.5 border-t justify-around -ml-[1px] border-gray-100">
      <Link to={"/"}>
        <img className="w-8" src={Home2SVG} />
      </Link>
      <Link to={"/get-transactions"}>
        <img className="w-8" src={TransactionListSVG} />
      </Link>
      <Link to={"/add-transaction"}>
        <img className="w-8" src={AddTransactionSVG} />
      </Link>
      <Link to={!isLoggedIn && "/login"}>
        <img className="w-8" src={UserSVG} />
      </Link>
    </div>
  );
};

export default Footer;
