const {} = require("sequelize");
const formations = require("../Models/formations");
// on importe sequelize

// on importe le model Formation
class formationService {
  async getAllFormation() {
    // on declare la fonction getAllFormation
    return await formations.findAll(); // on renvoie tous les Formation
  }
  async addFormation(formation) {
    // on declare la fonction addFormation;
    return await formations.create(formation); // on renvoie la formation
  }
  async getFormationById(id) { // on declare la fonction getFormationById
    return await formations.findByPk(id); // on renvoie la formation par son id
    }
}
module.exports = new formationService();
// on exporte le service stagiaire
