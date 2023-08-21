require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { body } = require("express-validator");
const app = express();
const PORT = process.env.PORT || 3000;

const userController = require("./controllers/user.controller");
const { login, register } = require("./controllers/auth.controller");

app.use(express.json());
app.use(cors());

const users = [];

const registrationValidation = [
  body("username").notEmpty().withMessage("Username is required."),
  body("username").custom((value) => {
    if (users.some((user) => user.username === value)) {
      throw new Error("Username already exists.");
    }
    return true;
  }),
  body("email").isEmail().withMessage("Invalid email format."),
  body("email").custom((value) => {
    if (users.some((user) => user.email === value)) {
      throw new Error("Email already exists.");
    }
    return true;
  }),
  body("password").notEmpty().withMessage("Password is required."),
];

app.post("/register", registrationValidation, register);
app.post("/login", login);

app.get("/", async (req, res) => {
  res.status(201).send(users);
});

app.use("/users", userController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
