const express = require("express");
// on importe express
const router = express.Router();
// on declare le router
const formateurController = require("../Controllers/formateurcontrollers");
// on importe le controller formateurs
router.get("/", (req, res) => {
  // on declare la route get //
  formateurController.getAllFormateur(req, res); //
  // on declare la fonction getAllFormateur
});



router.post("/", (req, res) => {
  formateurController.addFormateur(req, res);
});

router.get("/:id", (req, res) => {
  formateurController.getFormateurById(req, res);
});

// router.put("/:id", (req, res) => {
//   formateurController.updateFormateur(req, res);
// });

router.put("/:id", (req, res) => {
  formateurController.updateFormateur(req, res);
  });

module.exports = router;
// on exporte le router
