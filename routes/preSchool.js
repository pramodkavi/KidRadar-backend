const express = require("express");
const router = express.Router();
const preSchoolController = require("../controllers/preSchoolController");

router.get("/:uid", preSchoolController.getPreSchools);
router.post("/", preSchoolController.createPreSchool);
router.put("/:id", preSchoolController.updatePreSchool);
router.delete("/:id", preSchoolController.deletePreSchool);


module.exports = router;


