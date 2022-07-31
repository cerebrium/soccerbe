import express, { Router } from "express";
import mongoose from "mongoose";
import playersService from "../services/playerService";

let router: Router = express.Router();

router.post("/add", async (req, res): Promise<void> => {
  try {
    const newPlayer = await playersService.addPlayer(req.body);
    res.status(500).json(newPlayer);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/", async (_, res): Promise<void> => {
  try {
    const players = await playersService.findPlayers();
    res.status(500).json(players);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get("/:email", async (req, res): Promise<void> => {
  try {
    const player = await playersService.getPlayerByEmail(req.params.email);
    res.status(500).json(player);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.put("/:playerId/addTeam/:teamId", async (req, res): Promise<void> => {
  try {
    const player = await playersService.addTeamToPlayer(
      req.params.playerId,
      req.params.teamId as unknown as mongoose.Types.ObjectId
    );
    res.status(500).json(player);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
