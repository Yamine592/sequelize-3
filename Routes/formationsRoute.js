const express = require('express');
// on importe express
const router = express.Router();
// on declare le router
const formationController =
require('../Controllers/formationscontrollers');
// on importe le controller formations
router.get("/", (req, res) => { // on declare la route get //
 formationController.getAllFormation(req, res); // 
// on declare la fonction getAllFormation
});
module.exports = router;
// on exporte le router