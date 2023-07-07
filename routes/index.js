const express = require("express");
const router = express.Router();
const controllers = require("../controllers/poll");

router.post("/questions/create", controllers.createQuestion);
router.post("/questions/:id/options/create", controllers.addOptionsToQuestion);
router.delete("/questions/:id/delete", controllers.deleteQuestion);
router.delete("/questions/:questionId/options/:optionId/delete", controllers.deleteOption);
router.post("/questions/:questionId/options/:optionId/add_vote",controllers.addVoteToOption);
router.get("/questions/:id", controllers.viewQuestion);

module.exports = router;
