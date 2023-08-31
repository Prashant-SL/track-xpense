import { combineReducers } from "redux";
import { transactionsReducer, mainBalanceReducer } from "./transactionsReducer";
const reducers = combineReducers({
  transactions: transactionsReducer,
  balance: mainBalanceReducer,
});
export default reducers;
