const Listing = require('./listing.models');
const MediaService = require('../media/media.services');
class ListingService {
  static async createListing(data) {
    const listing = new Listing(data);
    await listing.save();
    return listing;
  }

  static async getListingById(id) {
    return await Listing.findById(id);
  }

  static async updateListing(id, data) {
    return await Listing.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteListing(id) {
    return await Listing.findByIdAndDelete(id);
  }

  static async getListingsByUser(userId) {
    return await Listing.find({ userId });
  }

  static async addMedia(listingId, files) {
    const listing = await Listing.findById(listingId);
    if (!listing) throw new Error('Annonce non trouvée');

    // Uploader les images
    if (files.images) {
      for (const image of files.images) {
        const imageUrl = await MediaService.uploadListingFiles(image, 'images');
        listing.images.push(imageUrl);
      }
    }

    // Uploader les vidéos
    if (files.videos) {
      for (const video of files.videos) {
        const videoUrl = await MediaService.uploadListingFiles(video, 'videos');
        listing.videos.push(videoUrl);
      }
    }

    await listing.save();
    return listing;
  }


  static async deleteMedia(listingId, mediaType, mediaUrl) {
    const listing = await Listing.findById(listingId);
    if (!listing) throw new Error('Annonce non trouvée');

    // Supprimer le fichier du service de stockage
    const key = mediaUrl.split('/').pop(); // Extraire la clé S3 de l'URL
    await s3.deleteObject({ Bucket: process.env.IDRIVE_E2_BUCKET_NAME, Key: key }).promise();

    // Supprimer l'URL du champ correspondant dans l'annonce
    if (mediaType === 'image') {
      listing.images = listing.images.filter((url) => url !== mediaUrl);
    } else if (mediaType === 'video') {
      listing.videos = listing.videos.filter((url) => url !== mediaUrl);
    } else {
      throw new Error('Type de média non supporté');
    }

    await listing.save();
    return listing;
  }

}

module.exports = ListingService;