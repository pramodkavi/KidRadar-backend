const express = require("express");
const router = express.Router();
const preSchoolController = require("../controllers/preSchoolController");

router.get("/preschools/:uid", preSchoolController.getPreSchools);
router.post("/preschools", preSchoolController.createPreSchool);
router.put("/preschools/:id", preSchoolController.updatePreSchool);
router.delete("/preschools/:id", preSchoolController.deletePreSchool);


module.exports = router;


