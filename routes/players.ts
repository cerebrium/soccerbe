import express, { Router } from "express";
import mongoose from "mongoose";
import playersService from "../services/playerService";

let router: Router = express.Router();

router.post("/add", async (req, res, next): Promise<void> => {
  let newPlayer = await playersService.addPlayer(req.body);
  if (newPlayer instanceof Error) {
    res.status(500).json(newPlayer);
  } else {
    res.status(200).json(newPlayer);
  }
});

router.get("/", async (req, res, next): Promise<void> => {
  let players = await playersService.findPlayers();
  if (players instanceof Error) {
    res.status(500).json(players);
  } else {
    res.status(200).json(players);
  }
});

router.get("/:email", async (req, res, next): Promise<void> => {
  let player = await playersService.getPlayerByEmail(req.params.email);
  if (player instanceof Error) {
    res.status(500).json(player);
  } else {
    res.status(200).json(player);
  }
});

router.put(
  "/:playerId/addTeam/:teamId",
  async (req, res, next): Promise<void> => {
    let player = await playersService.addTeamToPlayer(
      req.params.playerId,
      req.params.teamId as unknown as mongoose.Types.ObjectId
    );
    if (player instanceof Error) {
      res.status(500).json(player);
    } else {
      res.status(200).json(player);
    }
  }
);

export default router;
