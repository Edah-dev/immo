const Listing = require('../listing/listing.models');

class SearchService {
  static async searchListings(filters) {
    const { type, location, minPrice, maxPrice, minSurface, maxSurface } = filters;

    const query = {};

    if (type) query.type = type;
    if (location) query.location = { $regex: location, $options: 'i' };
    if (minPrice) query.price = { ...query.price, $gte: minPrice };
    if (maxPrice) query.price = { ...query.price, $lte: maxPrice };
    if (minSurface) query.surface = { ...query.surface, $gte: minSurface };
    if (maxSurface) query.surface = { ...query.surface, $lte: maxSurface };

    return await Listing.find(query);
  }
}

module.exports = SearchService;