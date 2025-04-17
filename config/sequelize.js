const { Sequelize } = require("sequelize");
require("dotenv").config(); 

const sequelize = new Sequelize(
  process.env.DB_NAME, // nom de la base de données
  process.env.DB_USER, // nom d'utilisateur 
  process.env.DB_PASSWORD,  // mot de passe 
  {
    host: process.env.DB_HOST, // hote de la base de données
    dialect: "mysql",  // dialecte de la base de donnée
    port: process.env.DB_PORT, // port de la base de donnée
  }
);

module.exports = sequelize;
// on explorte la constante sequelize pour l'utiliser dans d'autre fichiers 