const formateurService = require("../Services/formateurService");
// on importe le service stagiaire
class formateurController {
  // on declare la classe stagiaireController
  async getAllFormateur(req, res) {
    // on declare la fonction getAllFormateur
    try {
      // on declare le try
      const formateur = await formateurService.getAllFormateur();
      // on declare la const formateur qui va recuperer tous les formateur
      res.json(formateur);
      // on renvoie les formateur au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de la récupération des formateur" });
      // on renvoie l'erreur au format json
    }
  }

  async updateFormateur(req, res) {
    try {
      const formateur = await formateurService.updateFormateur(req.params.id,
        req.body
        
      );
      if (!formateur) {
        return res.status(404).json({ error: "Formateur non trouvée" });
      }
      res.json(formateur);
      console.log(req.body);
      console.log(req.params.id);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.json({ error: "Erreur lors de la mise à jour de la formateur" });
    }
  }

  async addFormateur(req, res) {
    // on declare la fonction addFormateur
    try {
      // on declare le try
      const formateur = await formateurService.addFormateur(req.body);
      // on declare la const formateur qui va recuperer la formateur
      res.status(201).json(formateur);
      // on renvoie la formateur au format json
    } catch (error) {
      // on declare le catch
      console.log(error); // on affiche l'erreur dans la console
      res.status(500); // on declare le status 500
      res.json({ error: "Erreur lors de l'ajout de la formateur" });
      // on renvoie l'erreur au format json
    }
  }
  //   async updateFormateur(req, res) {
  //     try {
  //       const formateur = await formateurService.updateFormateur(

  //         req.body,req.params.id

  //       );
  //       res.status(201).json(formateur);
  //     } catch (error) {
  //       console.log(error);
  //       res.status(500);
  //       res.json({ error: "Erreur lors de l'ajout de la formateur" });
  //     }
  //   }

}

module.exports = new formateurController();
