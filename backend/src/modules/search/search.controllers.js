const SearchService = require('./search.services');

class SearchController {
  static async searchListings(req, res) {
    try {
      const listings = await SearchService.searchListings(req.query);
      res.json(listings);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = SearchController;