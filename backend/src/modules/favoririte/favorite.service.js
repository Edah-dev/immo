// Fichier : src/modules/favorite/services/favoriteService.js
const Favorite = require('./favorite.model');

class FavoriteService {
  static async addFavorite(userId, listingId) {
    const favorite = new Favorite({ userId, listingId });
    await favorite.save();
    return favorite;
  }

  static async removeFavorite(userId, listingId) {
    await Favorite.findOneAndDelete({ userId, listingId });
  }

  static async getFavoritesByUser(userId) {
    return await Favorite.find({ userId }).populate('listingId');
  }
}

module.exports = FavoriteService;