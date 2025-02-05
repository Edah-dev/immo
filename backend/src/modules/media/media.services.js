const s3 = require('../../../config/s3'); // Utiliser le client S3 configuré pour IDrive e2
const Media = require('./media.models');
const fs = require('fs');
const path = require('path');

class MediaService {
  static async uploadFile(file, type, description, listingId, userId) {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
      Bucket: process.env.IDRIVE_E2_BUCKET_NAME, // Nom du bucket IDrive e2
      Key: `media/${Date.now()}_${path.basename(file.originalname)}`, // Nom du fichier sur IDrive e2
      Body: fileStream,
      ACL: 'public-read', // Rendre le fichier public
    };

    // Téléverser le fichier sur IDrive e2
    const uploadResult = await s3.upload(uploadParams).promise();

    // Enregistrer les informations du média dans MongoDB
    const media = new Media({
      url: uploadResult.Location, // URL publique du fichier
      type,
      description,
      listingId,
      userId,
    });
    await media.save();

    // Supprimer le fichier temporaire
    fs.unlinkSync(file.path);

    return media;
  }

  static async getMediaById(id) {
    return await Media.findById(id);
  }

  static async deleteMedia(id) {
    const media = await Media.findById(id);
    if (!media) throw new Error('Média non trouvé');

    // Supprimer le fichier de IDrive e2
    const key = media.url.split('/').pop(); // Extraire la clé IDrive e2 de l'URL
    await s3.deleteObject({ Bucket: process.env.IDRIVE_E2_BUCKET_NAME, Key: key }).promise();

    // Supprimer l'entrée de la base de données
    await Media.findByIdAndDelete(id);

    return media;
  }

  static async uploadListingFiles(file, type) {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams = {
      Bucket: process.env.IDRIVE_E2_BUCKET_NAME,
      Key: `${type}/${Date.now()}_${path.basename(file.originalname)}`, // Ex: images/12345_photo.jpg
      Body: fileStream,
      ACL: 'public-read', // Rendre le fichier public
    };

    // Téléverser le fichier sur IDrive e2
    const uploadResult = await s3.upload(uploadParams).promise();

    // Supprimer le fichier temporaire
    fs.unlinkSync(file.path);

    return uploadResult.Location; // Retourner l'URL publique du fichier
  }

}

module.exports = MediaService;