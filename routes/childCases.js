const express = require("express");
const router = express.Router();
const childCasesController = require("../controllers/childCasesController");

router.get("/:uid", childCasesController.getChildCases);
router.post("/", childCasesController.createChildCases);
router.delete("/:id", childCasesController.deleteChildCases);
router.put("/:id", childCasesController.updateChildCases);

module.exports = router;


