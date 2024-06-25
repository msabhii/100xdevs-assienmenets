const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://msabhithakur7777:r5KJ6w6bvK3HKvsr@week3assignement.aqvxajj.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  email: String,
  purchasedCourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Courses",
    },
  ],
});
const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  imageLink: String,
  rate: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
