require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");
const connectDb = require("./configs/db");

app.use(express.json());
app.use(cors());
connectDb();

// Transaction routes
app.use("/api/v1/transactions", require("./routes/transaction.route"));
app.use("/api/v1/user", require("./routes/user.route"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
