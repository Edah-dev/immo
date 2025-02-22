// Fichier : src/modules/favorite/models/Favorite.js
const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à l'utilisateur
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true }, // Référence à l'annonce
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Favorite', FavoriteSchema);