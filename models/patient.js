
// Creates a "Patient" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("patient", {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        notNull: {
          msg: 'Name cannot be null',
        },
      },
    },   
    Email: {
      type: DataTypes.STRING,
      isEmail: true,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Email cannot be null',
        },
      },
    },
    app_date:  {
      type: DataTypes.STRING, 
    },
    created_at: {
      type: DataTypes.STRING, 
    },
    phone_number: {
      type: DataTypes.STRING, 
    },
    Notes:  {
      type: DataTypes.STRING, 
    },
    Covid: {
      type: DataTypes.STRING, 
    },
    Checked_In: {
      type: DataTypes.BOOLEAN, 
    }
  });
  
  return Patient
  }
  
  