const { Sequelize, DataTypes } = require("sequelize");
const { envConfig } = require("../config/config")

const sequelize = new Sequelize(envConfig.connectionString)


sequelize
    .authenticate()
    .then(() => {
        console.log("CONNECTED!!");
    })
    .catch((err) => {
        console.log("Error" + err);
    });


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importing model files 
db.books = require("./models/Book")(sequelize, DataTypes);


sequelize.sync({ force: false }).then(() => {
    console.log("yes re-sync done");
});

module.exports = db;