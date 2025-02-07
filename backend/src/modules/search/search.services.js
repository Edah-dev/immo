const Listing = require('../listing/listing.models');
const redisClient = require('../../../config/redis');

class SearchService {
    static async searchListings(filters) {
        const cacheKey = JSON.stringify(filters); // Utiliser les filtres comme clé de cache
    
        // Vérifier si les résultats sont déjà en cache
        const cachedResults = await redisClient.get(cacheKey);
        if (cachedResults) {
          return JSON.parse(cachedResults); // Retourner les résultats en cache
        }
    
        // Si non, exécuter la recherche dans la base de données
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

        console.log(query);
    
        const results = await Listing.find(query);
    
        // Mettre les résultats en cache avec une expiration de 5 minutes (300 secondes)
        await redisClient.set(cacheKey, JSON.stringify(results), { EX: process.env.REDIS_EXPIRATION });
    
        return results;
      }
}

module.exports = SearchService;