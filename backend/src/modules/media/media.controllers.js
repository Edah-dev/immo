const MediaService = require('./media.services');

class MediaController {
  static async uploadMedia(req, res) {
    try {
      const { type, description, listingId } = req.body;
      const userId = req.user.id;
      const file = req.file; // Fichier téléversé via Multer
      const media = await MediaService.uploadFile(file, type, description, listingId, userId);
      res.status(201).json(media);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getMedia(req, res) {
    try {
      const media = await MediaService.getMediaById(req.params.id);
      res.json(media);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteMedia(req, res) {
    try {
      const media = await MediaService.deleteMedia(req.params.id);
      res.json(media);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = MediaController;