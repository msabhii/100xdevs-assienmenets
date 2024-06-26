// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
function adminMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username) {
      next();
    } else {
      res.status(403).json({
        msg: "Not Authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect Input",
    });
  }
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}
module.exports = adminMiddleware;
