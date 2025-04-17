const { } = require("sequelize");
// on importe sequelize
const formateur = require('../Models/formateur');
// on importe le model stagiaires
class formateurService {
async getAllFormateur() { // on declare la fonction getAllStagiaires
return await formateur.findAll(); // on renvoie tous les stagiaires
}
}
module.exports = new formateurService();
// on exporte le service stagiaire