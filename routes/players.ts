import express, { Router } from "express";
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

export default router;
