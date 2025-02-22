const s3 = require('../../../config/s3'); // Utiliser le client S3 configuré pour IDrive e2
const Document = require('./user.models').Document; // Importer le modèle Document
const fs = require('fs');
const path = require('path');

class DocumentService {
  static async uploadDocument(file, type, userId) {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
      Bucket: process.env.IDRIVE_E2_BUCKET_NAME, // Nom du bucket IDrive e2
      Key: `documents/${Date.now()}_${path.basename(file.originalname)}`, // Nom du fichier sur IDrive e2
      Body: fileStream,
      ACL: 'public-read', // Rendre le fichier public
    };

    // Téléverser le fichier sur IDrive e2
    const uploadResult = await s3.upload(uploadParams).promise();

    // Enregistrer les informations du document dans MongoDB
    const document = new Document({
      userId,
      type,
      url: uploadResult.Location, // URL publique du fichier
    });
    await document.save();

    // Supprimer le fichier temporaire
    fs.unlinkSync(file.path);

    return document;
  }

  static async getDocumentsByUser(userId) {
    return await Document.find({ userId });
  }

  static async verifyDocument(documentId, status) {
    const document = await Document.findByIdAndUpdate(documentId, { status }, { new: true });
    return document;
  }
}

module.exports = DocumentService;