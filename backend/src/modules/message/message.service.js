// Fichier : src/modules/messaging/services/messagingService.js
const Message = require('./message.model');

class MessagingService {
  static async sendMessage(senderId, receiverId, content) {
    const message = new Message({ senderId, receiverId, content });
    await message.save();
    return message;
  }

  static async getMessagesBetweenUsers(userId1, userId2) {
    return await Message.find({
      $or: [
        { senderId: userId1, receiverId: userId2 },
        { senderId: userId2, receiverId: userId1 },
      ],
    }).sort({ createdAt: 1 });
  }
}

module.exports = MessagingService;