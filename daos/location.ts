import { Schema } from "mongoose";
import Location from "../models/Locations";

export type Location = {
  name: String;
  sport: String;
  address: String;
  city: String;
  team: String | Schema.Types.ObjectId;
  votes: Number;
};

class PlayersDAO {
  async getLocations(): Promise<unknown | Location[]> {
    try {
      return await Location.find();
    } catch (e) {
      return e;
    }
  }

  async getLocationByTeam(team: string): Promise<unknown | Location[]> {
    try {
      return await Location.find({ team });
    } catch (e) {
      return e;
    }
  }

  async addLocation(location: Location): Promise<unknown | Location[]> {
    try {
      return await Location.create(location);
    } catch (e) {
      return e;
    }
  }
}

export default new PlayersDAO();
