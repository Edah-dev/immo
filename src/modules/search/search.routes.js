const express = require('express');
const SearchController = require('./search.controllers');

const router = express.Router();

router.get('/', SearchController.searchListings);

module.exports = router;