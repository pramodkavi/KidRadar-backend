const express = require("express");

const router = express.Router();

const preSchoolCasesController = require("../controllers/preSchoolCasesController");

router.get("/:uid", preSchoolCasesController.getPreSchoolCases);
router.post("/", preSchoolCasesController.createPreSchoolCases);
router.put("/:id", preSchoolCasesController.updatePreSchoolCases);
router.delete("/:id", preSchoolCasesController.deletePreSchoolCases);

module.exports = router;
