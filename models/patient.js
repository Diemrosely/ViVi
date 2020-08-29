
// Creates a "Patient" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var Patient = sequelize.define("patient", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        notNull: {
          msg: 'First Name cannot be null',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true,
      validate: {
        notNull: {
          msg: 'Last Name cannot be null',
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
    Age: {
      type: DataTypes.STRING,
      isNumeric:true,
      validate: {
        notNull: {
          msg: 'please enter an age',
      },
  },
},
    Covid: {
      type: DataTypes.STRING, 
    },
    created_at: {
      type: DataTypes.STRING, 
    }
  });
  
  return Patient
  }
  
  