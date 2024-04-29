const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/:instituteId", courseController.getCoursesByInstituteId);
router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
router.delete("/:id", courseController.deleteCourse);

module.exports = router;
