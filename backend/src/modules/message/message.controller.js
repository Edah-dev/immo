// Fichier : src/modules/messaging/controllers/messagingController.js
const MessagingService = require('./message.service');

class MessagingController {
  static async sendMessage(req, res) {
    try {
      const { senderId, receiverId, content } = req.body;
      const message = await MessagingService.sendMessage(senderId, receiverId, content);
      res.status(201).json(message);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getMessages(req, res) {
    try {
      const { userId1, userId2 } = req.params;
      const messages = await MessagingService.getMessagesBetweenUsers(userId1, userId2);
      res.json(messages);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = MessagingController;