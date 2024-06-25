const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../solution/db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username,
    password,
  });
  res.json({ msg: "Admin Created successfully" });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = Course.create({
    title,
    description,
    imageLink,
    price,
  });
  res.json({
    msg: "Course created successfully",
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    course: response,
  });
});

module.exports = router;
