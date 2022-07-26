import mongoose from "mongoose";
import playersDAO, { Player } from "../daos/players";

class PlayerService {
  async findPlayers() {
    const result = await playersDAO.getPlayers();
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  async addPlayer(player: Player) {
    const result = await playersDAO.addPlayer(player);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  async getPlayerByEmail(email: string) {
    const result = await playersDAO.getPlayerByEmail(email);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  async addTeamToPlayer(playerId: string, teamId: mongoose.Types.ObjectId) {
    const result = await playersDAO.addTeamToPlayer(playerId, teamId);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }
}

export default new PlayerService();
