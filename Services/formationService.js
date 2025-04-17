const { } = require("sequelize");
// on importe sequelize
const formation = require('../Models/formations');
// on importe le model Formation
class formationService {
async getAllFormation() { // on declare la fonction getAllFormation
return await formation.findAll(); // on renvoie tous les Formation
}
}
module.exports = new formationService();
// on exporte le service stagiaire