import Team from "../models/Team";

export type Team = {
  name: string;
  sport: string;
  location: string;
  players: string[];
};

class TeamDAO {
  async getTeams(): Promise<unknown | Team[]> {
    try {
      return await Team.find();
    } catch (e) {
      return e;
    }
  }

  async getTeamByName(name: string): Promise<unknown | Team[]> {
    try {
      return await Team.find({ name });
    } catch (e) {
      return e;
    }
  }
}

export default new TeamDAO();
