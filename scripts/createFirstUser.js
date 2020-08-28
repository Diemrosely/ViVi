require("dotenv").config();
const db = require("../models");
db.sequelize.sync().then(function(){
    db.User.create({
        email: process.env.INITIAL_EMAIL,
        password: process.env.INITIAL_PASSWORD
    }).then(function(){
        console.log("Done")
    }).catch(err => {
        console.log(err);
    })
})