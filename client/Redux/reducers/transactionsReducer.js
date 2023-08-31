import { ActionTypes } from "../constants/action-types";

const intialState = {
  transactions: [],
};

export const transactionsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TRANSACTIONS:
      return { ...state, transactions: payload };
    default:
      return state;
  }
};

export const mainBalanceReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.MAIN_BALANCE:
      return { ...state, ...payload };
    default:
      return state;
  }
};
