const {} = require("sequelize");
// on importe sequelize
const formateur = require("../Models/formateur");
// on importe le model formateur
class formateurService {
  async getAllFormateur() {
    // on declare la fonction getAllformateur
    return await formateur.findAll(); // on renvoie tous les formateur
  }

    async addFormateur(toto) {
      // on declare la fonction addformateur;
      return await formateur.create(toto); // on renvoie la formateur
    }
  
}
module.exports = new formateurService();
// on exporte le service stagiaire
