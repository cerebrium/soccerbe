import locationDao, { Location } from "../daos/location";
import { guard } from "../utils/utilFunctions";

class LocationService {
  async findLocations(): Promise<unknown | Location[]> {
    return await locationDao.getLocations;
  }

  async addLocation(location: Location): Promise<any> {
    try {
      guard(Array.from(arguments));
    } catch (e) {
      return e;
    }
    return await locationDao.addLocation(location);
  }
}

export default new LocationService();
