import locationDao, { Location } from "../daos/location";
import { guard } from "../utils/utilFunctions";

class LocationService {
  async findLocations(): Promise<unknown | Location[]> {
    const result = await locationDao.getLocations;
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }

  async addLocation(location: Location): Promise<any> {
    guard(Array.from(arguments));
    const result = await locationDao.addLocation(location);
    if (result instanceof Error) {
      throw result;
    }
    return result;
  }
}

export default new LocationService();
