const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  url: { type: String, required: true }, // URL du fichier sur le CDN
  type: { type: String, enum: ['photo', 'video'], required: true }, // Type de média
  description: { type: String }, // Description optionnelle
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing' }, // Référence à l'annonce
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Référence à l'utilisateur (pour la photo de profil)
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Media', MediaSchema);