const formationService = require("../Services/formationService");
// on importe le service stagiaire
class formationController {
  // on declare la classe formationControllerr
  async getAllFormation(req, res) {
    // on declare la fonction getAllFormation
    try {
      // on declare le try
      const formation = await formationService.getAllFormation();
      // on declare la const formation qui va recuperer tous les formation
      res.json(formation);
      // on renvoie les formation au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des formations" });
      // on renvoie l'erreur au format json
    }
  }
  async addFormation(req, res) {
    // on declare la fonction addFormation
    try {
      // on declare le try
      const formation = await formationService.addFormation(req.body);
      // on declare la const formation qui va recuperer la formation
      res.status(201).json(formation);
      // on renvoie la formation au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de l'ajout de la formation" });
      // on renvoie l'erreur au format json
    }
  }
  async getFormationById(req, res) { // on declare la fonction getFormationById
    try { // on declare le try
    const formation = await
    formationService.getFormationById(req.params.id);
    // on declare la const formation qui va recuperer la formation par son id
    if (!formation) { // si la formation n'existe pas
    return res.status(404).json({ error:
    'Formation non trouvée' });
    // on renvoie l'erreur au format json
    }
    res.json(formation);
    // on renvoie la formation au format json
    } catch (error) { // on declare le catch
    console.log(error); // on affiche l'erreur dans la console
    res.status(500); // on declare le status 500
    res.json({ error: 'Erreur lors de la récupération de la formation' });
    // on renvoie l'erreur au format json
    }
    }
    
}
module.exports = new formationController();
// on exporte la classe formationController
