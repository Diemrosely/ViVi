// Creates a "Patient" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var Patient = sequelize.define("Patient", {
    first: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    last: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      unique: true,
    
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    
    },
    riskLevel: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    
  });

  return Patient;
};
