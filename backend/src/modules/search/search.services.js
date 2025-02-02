const Listing = require('../listing/listing.models');

class SearchService {
    static async searchListings(filters) {
        const query = {};
    
        // Filtres de base
        if (filters.type) query.type = filters.type;
        if (filters.location) query.location = { $regex: filters.location, $options: 'i' };
        if (filters.minPrice) query.price = { ...query.price, $gte: filters.minPrice };
        if (filters.maxPrice) query.price = { ...query.price, $lte: filters.maxPrice };
        if (filters.minSurface) query.surface = { ...query.surface, $gte: filters.minSurface };
        if (filters.maxSurface) query.surface = { ...query.surface, $lte: filters.maxSurface };
    
        // Filtres pour les avantages
        if (filters.amenities) {
          for (const [key, value] of Object.entries(filters.amenities)) {
            if (value === 'true') query[`amenities.${key}`] = true;
          }
        }
    
        return await Listing.find(query);
      }
}

module.exports = SearchService;