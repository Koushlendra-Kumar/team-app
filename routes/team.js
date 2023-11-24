const express = require("express");

const router = express.Router();

const {
  getAllTeams,
  getTeamById,
  createTeam,
} = require("../controllers/teamController");

router.get("/", getAllTeams);

router.get("/:id", getTeamById);

router.post("/", createTeam);

module.exports = router;
