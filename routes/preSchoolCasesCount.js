const express = require("express");
const router = express.Router();
const preSchoolCasesCountController = require("../controllers/preSchoolCasesCountController");

router.get("/:uid", preSchoolCasesCountController.getPreSchoolCasesCount);
router.post("/", preSchoolCasesCountController.createPreSchoolCasesCount);
router.delete("/:id", preSchoolCasesCountController.deletePreSchoolCasesCount);
router.put("/:id", preSchoolCasesCountController.updatePreSchoolCasesCount);

module.exports = router;


