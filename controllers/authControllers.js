/** Controller Methods are defined here
--Controller Methods are specific purpose methods used by routes to perform a specific task */


const Users = require("../models/Users");
const AuthHelpers = require("../helpers/authHelpers");

//A basic controller to signup a new user
let signup = (req, res) => {
  let { email, username, password } = req.body;
  let isValid = AuthHelpers.checkPasswordValidity(password);
  if (isValid) {
    Users.create({
      email: email,
      username: username,
      password: password
    })
      .then(user =>
        console.log("User created successfully with email : " + user.email)
      )
      .catch(error => console.log("Error creating user. Error: " + error));
  } else {
      console.log("Password Invalid");
      return res.status(400).json({
          success: false,
          message: "Password Invalid"
      });
  }
};

//You export all the required funtions of the file from here
module.exports = {
  signup
};
