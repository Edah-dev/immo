const express = require('express');
const ListingController = require('./listing.controllers');
const authMiddleware = require('../../../middlewares/authMiddleware');
const checkPermission = require('../../../middlewares/checkPermission');


const router = express.Router();

router.post('/', authMiddleware, checkPermission('listing', 'create'), ListingController.createListing);
router.get('/:id', ListingController.getListing);
router.put('/:id', authMiddleware, checkPermission('listing', 'update'), ListingController.updateListing);
router.delete('/:id', authMiddleware, checkPermission('listing', 'delete'), ListingController.deleteListing);
router.get('/user/listings', authMiddleware, ListingController.getUserListings);

module.exports = router;