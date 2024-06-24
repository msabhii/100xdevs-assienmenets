// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
