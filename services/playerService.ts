import mongoose from "mongoose";
import playersDAO, { Player } from "../daos/players";
import { guard } from "../utils/utilFunctions";

class PlayerService {
  async findPlayers(): Promise<unknown> {
    return await playersDAO.getPlayers();
  }

  async addPlayer(player: Player): Promise<unknown> {
    try {
      guard(Array.from(arguments));
      return await playersDAO.addPlayer(player);
    } catch (e) {
      return e;
    }
  }

  async getPlayerByEmail(email: string): Promise<unknown> {
    try {
      guard(Array.from(arguments));
      return await playersDAO.getPlayerByEmail(email);
    } catch (e) {
      return e;
    }
  }

  async addTeamToPlayer(
    playerId: string,
    teamId: mongoose.Types.ObjectId
  ): Promise<unknown> {
    try {
      guard(Array.from(arguments));
      return await playersDAO.addTeamToPlayer(playerId, teamId);
    } catch (e) {
      return e;
    }
  }
}

export default new PlayerService();
