const express = require("express");
const router = express.Router();
const {
  addtransaction,
  getTransactions,
  getBalance,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactions.controller");
const { authorize } = require("../middleware/authorize");

router.post("/add-transaction", authorize, addtransaction);
router.get("/get-transactions", authorize, getTransactions);
router.get("/get-balance", authorize, getBalance);
router.patch("/update-transaction/:id", authorize, updateTransaction);
router.delete("/delete-transaction/:id", authorize, deleteTransaction);

module.exports = router;
