// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
// var Patient = require("../models/patient.js");


module.exports = function (app) {
  // Route for logging in
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      
      // The user is not logged in, send back an empty object
      res.status(401).json({});
    } else {
      
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

    // CRUD routes
  app.get("/api/all", function (req, res) {
    db.Patient.findAll({}).then(function (results) {
      res.json(results);
    });

  });


  app.post("/api/new", function (req, res) {
    console.log(req.body);
    db.Patient.create({
      first: req.body.first,
      last: req.body.last,
      email: req.body.email,
      age: req.body.age,
      riskLevel: req.body.riskLevel,
    }).then(function (results) {
      res.json(results);
    });

  });

  app.delete("/api/delete/:id", function (req, res) {
    console.log("Patient ID:");
    console.log(req.params.id);
    Patient.destroy({
      where: {
        id: req.params.id
      }
    }).then(function () {
      res.end();
    });
  });
};
