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
    } catch (e) {
      return e;
    }
    return await playersDAO.addPlayer(player);
  }

  async getPlayerByEmail(email: string): Promise<unknown> {
    try {
      guard(Array.from(arguments));
    } catch (e) {
      return e;
    }
    return await playersDAO.getPlayerByEmail(email);
  }

  async addTeamToPlayer(
    playerId: string,
    teamId: mongoose.Types.ObjectId
  ): Promise<unknown> {
    try {
      guard(Array.from(arguments));
    } catch (e) {
      return e;
    }
    return await playersDAO.addTeamToPlayer(playerId, teamId);
  }
}

export default new PlayerService();
