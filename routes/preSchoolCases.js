const express = require("express");

const router = express.Router();

const preSchoolCasesController = require("../controllers/preSchoolCasesController");

router.get("/preSchoolCases/:uid", preSchoolCasesController.getPreSchoolCases);
router.post("/preSchoolCases", preSchoolCasesController.createPreSchoolCases);
router.put("/preSchoolCases/:id", preSchoolCasesController.updatePreSchoolCases);
router.delete("/preSchoolCases/:id", preSchoolCasesController.deletePreSchoolCases);

module.exports = router;






