const { User } = require("../solution/db");

function userMiddleware(req, res, next) {
  User.findOne({
    username: username,
    password: password,
  }).then(function (value) {
    if (value) {
      return next();
    }else{
        res.status(404).json({msg:"Not Recoqnisied"})
    }
  });
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
