const mongoose = require("mongoose");

const transactionsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["income", "expense"],
      required: [true, "Type is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    date: {
      type: Date,
      default: Date.now,
      required: [true, "Date is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: [true, "Login to add transaction"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Transactions = mongoose.model("transactions", transactionsSchema);
module.exports = Transactions;
