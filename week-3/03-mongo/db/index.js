const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://abhi:WDdPUczZTZotFwoc@cluster0.trxx9ft.mongodb.net/course_selling_app"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  name: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  name: String,
  password: String,
  email: String,
  Course: [
    {
      type: "Stdy",
      ref: "Harkirat",
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
