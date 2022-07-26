import mongoose from "mongoose";
import { connect } from "../db/db";
import Player from "../models/Player";

export type Player = {
  name: string;
  email: string;
  age: number;
  position: string;
};

class PlayersDAO {
  constructor() {
    this.connectToPlayers();
  }

  async connectToPlayers(): Promise<void> {
    try {
      await connect();
    } catch (e) {
      console.log("Error in the dao: ", e);
    }
  }

  async getPlayers(): Promise<unknown | Player[]> {
    try {
      return await Player.find();
    } catch (e) {
      return e;
    }
  }

  async getPlayerByEmail(email: string): Promise<Player | null | unknown> {
    try {
      return await Player.findOne({ email });
    } catch (e) {
      return e;
    }
  }

  async addPlayer(player: Player): Promise<unknown> {
    try {
      return await Player.create(player);
    } catch (e) {
      return e;
    }
  }

  async addTeamToPlayer(
    playerId: string,
    team: mongoose.Types.ObjectId
  ): Promise<unknown> {
    try {
      return await Player.findByIdAndUpdate(playerId, {
        $push: { teams: { team } },
      });
    } catch (e) {
      return e;
    }
  }
}

export default new PlayersDAO();
