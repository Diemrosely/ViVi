
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// Creates a "Patient" model that matches up with DB

module.exports = function (sequelize, DataTypes) { 
var Patient = sequelize.define("patient", {
  Name: DataTypes.STRING,
  Email: DataTypes.STRING,
  app_date: DataTypes.STRING,
  created_at: DataTypes.DATE,
  phone_number: DataTypes.INTEGER,
  Notes: DataTypes.STRING,
  Covid: DataTypes.STRING
});
return Patient
}
// Syncs with DB
// Patient.sync();

// // Makes the Patient Model available for other files (will also create a table)
// module.exports = Patient;
