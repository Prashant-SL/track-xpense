require("dotenv").config();
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRETKEY;

// Generates a JWT token
const generateToken = (userId) => {
  const payload = {
    userId,
  };

  return jwt.sign(payload, secretKey, { expiresIn: "12h" }); // Token expires in 1 hour
};

// Middleware for JWT authorization
const authorize = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Authorization token missing" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), secretKey);
    req.userId = decoded.userId; // Attaching user ID to the request
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = {
  generateToken,
  authorize,
};
