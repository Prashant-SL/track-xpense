const Transactions = require("../models/transactions.model");

// Add new transaction
const addtransaction = async (req, res) => {
  const { amount, category, description, date, user, type } = req.body;

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
    res.status(201).json({ message: "Transaction added successfully" });
  } catch (error) {
    // console.log("error", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Get all transaction list
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.find({
      user: req.userId,
    });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

// Update a transaction by ID
const updateTransaction = async (req, res) => {
  const userId = req.userId; // Extracted from the authorization middleware
  const transactionId = req.params.id; // Extract transaction ID from request parameters

  try {
    const updatedTransaction = await Transactions.findOneAndUpdate(
      { _id: transactionId, user: userId },
      req.body, // Updated transaction data
      { new: true } // Return the updated document
    );

    if (!updatedTransaction) {
      return res
        .status(404)
        .json({ message: "Transaction not found or unauthorized" });
    }

    res.status(200).json(updatedTransaction);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Delete a transaction by ID
const deleteTransaction = async (req, res) => {
  const userId = req.userId;
  const transactionId = req.params.id; // Extract transaction ID from request parameters

  try {
    const transaction = await Transactions.findOneAndDelete({
      _id: transactionId,
      user: userId,
    });

    if (!transaction) {
      return res
        .status(404)
        .json({ message: "Transaction not found or unauthorized" });
    }

    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = {
  addtransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
};
