const express = require("express");
const router = express.Router();
const schoolController = require("../controllers/schoolController");

router.get("/:uid", schoolController.getSchoolByUid);
router.post("/", schoolController.createSchool);
router.put("/:id", schoolController.updateSchool);
router.delete("/:id", schoolController.deleteSchool);

module.exports = router;

