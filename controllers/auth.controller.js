const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const users = [];

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user in the database (replace with database insert in production)
    users.push({ username, email, password: hashedPassword });
    res.status(201).send("User registered successfully.");
  } catch (error) {
    res.status(500).send("Error registering user.");
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Find user by username (replace with database query in production)
    const user = users.find((user) => user.username === username);
    if (!user) {
      return res.status(404).send("User not found.");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.send("Login successful.");
    } else {
      res.status(401).send("Invalid password.");
    }
  } catch (error) {
    res.status(500).send("Error logging in.");
  }
};

module.exports = { register, login };
