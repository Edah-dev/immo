const ListingService = require('./listing.services');

class ListingController {
  static async createListing(req, res) {
    try {
      const listing = await ListingService.createListing({ ...req.body, userId: req.user.id });
      res.status(201).json(listing);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getListing(req, res) {
    try {
      const listing = await ListingService.getListingById(req.params.id);
      res.json(listing);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateListing(req, res) {
    try {
      const listing = await ListingService.updateListing(req.params.id, req.body);
      res.json(listing);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteListing(req, res) {
    try {
      const listing = await ListingService.deleteListing(req.params.id);
      res.json(listing);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getUserListings(req, res) {
    try {
      const listings = await ListingService.getListingsByUser(req.user.id);
      res.json(listings);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  static async addMedia(req, res) {
    try {
      const { listingId } = req.params;
      const files = req.files; // Fichiers uploadés via Multer
      const listing = await ListingService.addMedia(listingId, files);
      res.json(listing);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  static async deleteMedia(req, res) {
    try {
      const { listingId, mediaType, mediaUrl } = req.params;
      const listing = await ListingService.deleteMedia(listingId, mediaType, mediaUrl);
      res.json({ message: 'Média supprimé avec succès', listing });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

}

module.exports = ListingController;