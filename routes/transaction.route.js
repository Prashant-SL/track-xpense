const express = require("express");
const router = express.Router();
const {
  addtransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactions.controller");
const { authorize } = require("../middleware/authorize");

router.post("/add-transaction", authorize, addtransaction);
router.get("/get-transactions", authorize, getTransactions);
router.patch("/update-transaction/:id", authorize, updateTransaction);
router.delete("/delete-transaction/:id", authorize, deleteTransaction);

module.exports = router;
