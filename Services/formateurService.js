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

  // async updateFormateur(formateur,id) {
  //   // on declare la fonction update formateur
  //   return await formateur.update({...formateur}, { where: { id_formateur: id } }); // on renvoie la formateur mise à jour
  // }

  async updateFormateur(id, x) {
    return await formateur.update(x, {
      where: {
        id_formateur: id,
      },
    });
  }
}

module.exports = new formateurService();
// on exporte le service stagiaire
