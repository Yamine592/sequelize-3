const formationService = 
require('../Services/formationService');
// on importe le service stagiaire
class formationController {
// on declare la classe formationControllerr
async getAllFormation(req, res) { // on declare la fonction getAllFormation
try { // on declare le try
const formation = await
formationService.getAllFormation();
// on declare la const formation qui va recuperer tous les formation
res.json(formation);
// on renvoie les formation au format json
} catch (error) { // on declare le catch
console.log(error); // on affiche l'erreur dans la console
res.status(500); // on declare le status 500
res.json({ error: 'Erreur lors de la récupération des formations' });
// on renvoie l'erreur au format json
}
}
}
module.exports = new formationController();
// on exporte la classe formationController