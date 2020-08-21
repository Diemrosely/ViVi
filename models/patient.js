
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Patient" model that matches up with DB
var Patient = sequelize.define("patient", {
  Name: Sequelize.STRING,
  Email: Sequelize.STRING,
  app_date: Sequelize.STRING,
  created_at: Sequelize.DATE,
  phone_number: Sequelize.INTEGER,
  Notes: Sequelize.STRING,
  Covid: Sequelize.STRING
});

// Syncs with DB
Patient.sync();

// Makes the Patient Model available for other files (will also create a table)
module.exports = Patient;
