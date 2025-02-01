const Listing = require('../models/Listing');

class ListingService {
  static async createListing(data) {
    return await Listing.create(data);
  }

  static async getListingById(id) {
    return await Listing.findById(id);
  }

  static async updateListing(id, data) {
    return await Listing.update(id, data);
  }

  static async deleteListing(id) {
    return await Listing.delete(id);
  }

  static async getListingsByUser(userId) {
    return await Listing.findByUserId(userId);
  }
}

module.exports = ListingService;