const Listing = require('./listing.models');

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
}

module.exports = ListingService;