// Fichier : src/modules/favorite/routes/favoriteRoutes.js
const express = require('express');
const FavoriteController = require('./favorite.controller');
const authMiddleware = require('../../../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, FavoriteController.addFavorite);
router.delete('/', authMiddleware, FavoriteController.removeFavorite);
router.get('/', authMiddleware, FavoriteController.getFavorites);

module.exports = router;