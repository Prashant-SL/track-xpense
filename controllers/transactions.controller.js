const Transactions = require("../models/transactions.model");

// Add new transaction
const addtransaction = async (req, res) => {
  const { amount, category, description, date, type } = req.body;

  try {
    const transactions = new Transactions({
      type,
      amount,
      category,
      description,
      date,
      user: req.userId,
    });
    transactions.save();
    res.status(201).json({ message: `${type} added successfully` });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Get all transaction list
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.find({ user: req.userId }).sort({
      date: -1,
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Get available balance
const getBalance = async (req, res) => {
  try {
    const transactions = await Transactions.find({ user: req.userId }).sort({
      date: -1,
    });

    let totalIncome,
      totalExpense,
      lastIncome,
      lastExpense = 0;

    transactions.find((transaction) => {
      if (transaction.type === "income") lastIncome = transaction.amount;
      else lastExpense = transaction.amount;
    });

    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        totalIncome += Number(transaction.amount);
      } else if (transaction.type === "expense") {
        totalExpense += Number(transaction.amount);
      }
    });
    const availableBalance = totalIncome - totalExpense;

    res
      .status(200)
      .json({ balance: availableBalance, totalIncome, totalExpense });
  } catch (error) {
    res.status(500).json({ error: "Error calculating balance" });
  }
};

// Update a transaction by ID
const updateTransaction = async (req, res) => {
  const userId = req.userId; // Extracted from the authorization middleware
  const transactionId = req.params.id; // Extract transaction ID from request parameters

  try {
    const updatedTransaction = await Transactions.findOneAndUpdate(
      { _id: transactionId, user: userId },
      { ...req.body, date: new Date() }, // Updated transaction data
      { new: true } // Return the updated document
    );

    if (!updatedTransaction) {
      return res
        .status(404)
        .json({ message: "Transaction not found or unauthorized" });
    }

    res.status(200).json(updatedTransaction);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Delete a transaction by ID
const deleteTransaction = async (req, res) => {
  const userId = req.userId;
  const transactionId = req.params.id; // Extract transaction ID from request parameters

  try {
    const transactions = await Transactions.findOneAndDelete({
      _id: transactionId,
      user: userId,
    });

    if (!transactions) {
      return res
        .status(404)
        .json({ message: "Transaction not found or unauthorized" });
    }
    res.status(200).send(transactions);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = {
  addtransaction,
  getTransactions,
  getBalance,
  updateTransaction,
  deleteTransaction,
};
