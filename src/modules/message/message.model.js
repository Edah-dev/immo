// Fichier : src/modules/messaging/models/Message.js
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à l'expéditeur
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence au destinataire
  content: { type: String, required: true }, // Contenu du message
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', MessageSchema);