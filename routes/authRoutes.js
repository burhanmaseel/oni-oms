module.exports = app => {
    const authControllers = require("../controllers/authControllers");

    //You define all the routes and request type here and connect the controller methods with each route
    app.route("/api/signup").post(authControllers.signup);
}