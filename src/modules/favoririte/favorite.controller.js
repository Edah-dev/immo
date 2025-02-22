// Fichier : src/modules/favorite/controllers/favoriteController.js
const FavoriteService = require('./favorite.service');

class FavoriteController {
  static async addFavorite(req, res) {
    try {
      const { listingId } = req.body;
        const userId = req.user.id;
      const favorite = await FavoriteService.addFavorite(userId, listingId);
      res.status(201).json(favorite);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async removeFavorite(req, res) {
    try {
      const { listingId } = req.body;
      const userId = req.user.id;
      await FavoriteService.removeFavorite(userId, listingId);
      res.json({ message: 'Favori supprimé avec succès' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getFavorites(req, res) {
    try {
      //const { userId } = req.params;
      const userId = req.user.id;
      const favorites = await FavoriteService.getFavoritesByUser(userId);
      res.json(favorites);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = FavoriteController;