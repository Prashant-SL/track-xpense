// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const app = express();
// const PORT = process.env.PORT || 3000;
// const path = require("path");
// const connectDb = require("./configs/db");

// app.use(express.json());
// app.use(cors());
// connectDb();

// // Transaction routes
// app.use("/api/v1/transactions", require("./routes/transaction.route"));
// app.use("/api/v1/user", require("./routes/user.route"));

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// const express = require("express");
// const cors = require("cors");

// const app = express();

// app.use(express.json());
// app.use(cors());

// app.use("/api/user/register", register);
// app.use("/api/user/login",userController)

// app.listen(PORT,()=>{
//   return `listening on Port ${PORT}`
// })

const User = require("../models/user.model");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    return res
      .status(500)
      .json({ message: "Email is already in use. Please use new email" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.find({ email });
  if (!user) {
    return res
      .status(500)
      .json({ message: "Email not exist. Please use new email" });
  }

  try {
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(403).json({ message: "wrong passowrd" });
    }

    try {
      const userId = user.id;
      const token = jwt.sign({ userId }, "some_secret_key", {
        expiresIn: "24h",
      });
      return res.status(200).json({ message: "Login success", token });
    } catch (error) {
      console.error(error.message);
    }

    // const user = new User({
    //   username,
    //   password: hashedPassword,
    // });
    // return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
  }
};
