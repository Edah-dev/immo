const DocumentService = require('./user.document.services');

class DocumentController {
  static async uploadDocument(req, res) {
    try {
      const { type } = req.body;
      const userId = req.user.id;
      const file = req.file; // Fichier téléversé via Multer
      console.log(req)
      const document = await DocumentService.uploadDocument(file, type, userId);
      res.status(201).json(document);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getDocuments(req, res) {
    try {
      const documents = await DocumentService.getDocumentsByUser(req.params.userId);
      res.json(documents);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async verifyDocument(req, res) {
    try {
      const { status } = req.body;
      const document = await DocumentService.verifyDocument(req.params.documentId, status);
      res.json(document);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = DocumentController;