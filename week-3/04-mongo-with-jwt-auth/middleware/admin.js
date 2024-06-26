// Middleware for handling auth
const jwt = require("jsonwebtoken");
const secret = require("../index");
function adminMiddleware(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  const token = req.headers.authorization;
  const words = token.split("");
  const jwtToken = words[1];

  const decodedValue = jwt.verify(jwtToken, secret);
  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "Not Authenticated",
    });
  }
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
