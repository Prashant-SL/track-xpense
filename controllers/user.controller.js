const bcrypt = require("bcrypt");
const Users = require("../models/users.model");

const { generateToken } = require("../middleware/authorize");

// Register a new user
const register = async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ username }); // checking if user already exists or not
  if (user) {
    return res
      .status(401)
      .json({ message: "Username already exists, please login" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10); //saving hashed password in the database
    const user = new Users({
      username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({
      message: "User registered successfully",
      userId: user.id,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "An error occurred" });
  }
};

// Login user
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Users.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid username or User not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid/Incorrect password" });
    }

    const token = generateToken(user.id);
    res.status(200).json({ token, userId: user.id });
  } catch (error) {
    res.status(500).json({ message: "An error occurred" });
  }
};

module.exports = { register, login };
