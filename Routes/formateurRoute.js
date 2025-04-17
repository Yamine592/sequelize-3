const express = require('express');
// on importe express
const router = express.Router();
// on declare le router
const formateurController =
require('../Controllers/formateurcontrollers');
// on importe le controller formateurs
router.get("/", (req, res) => { // on declare la route get //
    formateurController.getAllFormateur(req, res); // 
   // on declare la fonction getAllFormateur
   });

   router.post("/", (req, res) => { // on declare la route get //
    formateurController.getAllFormateur(req, res); // 
   // on declare la fonction getAllFormateur
   });
module.exports = router;
// on exporte le router