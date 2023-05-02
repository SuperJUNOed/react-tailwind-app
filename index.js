const express = require("express");
const bcrypt = require("bcrypt");
// const mongoose = require("mongoose");

const app = express();

// // connect to the MongoDB Database using Mongoose
// mongoose.connect("mongodb://localhost/myapp", { useNewUrlParser: true });

// // Define the User Schema
// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// // Create a Model from the User Schema
// const User = mongoose.model("User", userSchema);

// API endpoint for User Authentication
app.post("/api/users/login", async (req, res) => {
  const { email, password } = req.body;

  // // Find the user with the provided email
  // const user = await User.findOne({ email });
  // if (!user) {
  //   return res.status(401).json({ message: "Invalid Login credentials" });
  // }

  // // Verify the password
  // const validPassword = await bcrypt.compare(password, user.password);
  // if (!validPassword) {
  //   return res.status(401).json({ message: "Invalid Login credentials" });
  // }

  // // Create a session (using cookies or JWTs)
  // req.session.user = user; // Using cookies

  // res.send({ message: "Login Successful" });
  // Hard-coded email and password for demo purposes
  if (email === 'superjuno@gmail.com' && password === 'wjd1018115') {
    return res.status(200).json({ message: "Login successful" });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
});

// Start the server
app.listen(5000, () => console.log("Server started"));
