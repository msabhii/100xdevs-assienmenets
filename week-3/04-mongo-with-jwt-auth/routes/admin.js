const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const Jwt = require("jsonwebtoken");
const JWT_SECRET = require("../index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username,
    password,
  });
  res.json({ msg: "Admin Created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const user = await Admin.find({ username, password });
  if (user) {
    const token = Jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    res.json({
      msg: "Not a User",
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
