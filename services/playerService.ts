import mongoose from "mongoose";
import playersDAO, { Player } from "../daos/players";
import { guard } from "../utils/utilFunctions";

class PlayerService {
  async findPlayers(): Promise<unknown> {
    const result = await playersDAO.getPlayers();
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  async addPlayer(player: Player): Promise<unknown> {
    guard(Array.from(arguments));
    const result = await playersDAO.addPlayer(player);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  async getPlayerByEmail(email: string): Promise<unknown> {
    guard(Array.from(arguments));
    const result = await playersDAO.getPlayerByEmail(email);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  async addTeamToPlayer(
    playerId: string,
    teamId: mongoose.Types.ObjectId
  ): Promise<unknown> {
    guard(Array.from(arguments));
    const result = await playersDAO.addTeamToPlayer(playerId, teamId);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }
}

export default new PlayerService();
