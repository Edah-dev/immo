const express = require('express');
const ListingController = require('./listing.controllers');
const authMiddleware = require('../../../middlewares/authMiddleware');
const checkPermission = require('../../../middlewares/checkPermission');
const upload = require('../../../utils/multerConfig');
//const multer = require('multer');

//const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/', authMiddleware, checkPermission('listing', 'create'), ListingController.createListing);
router.get('/:id', ListingController.getListing);
router.put('/:id', authMiddleware, checkPermission('listing', 'update'), ListingController.updateListing);
router.delete('/:id', authMiddleware, checkPermission('listing', 'delete'), ListingController.deleteListing);
router.get('/user/listings', authMiddleware, ListingController.getUserListings);

// Ajouter des médias à une annonce
router.post('/:listingId/media',
    authMiddleware,
    checkPermission('listing', 'update'), 
    upload.fields([
    { name: 'images', maxCount: 20 }, // Jusqu'à 10 images
    { name: 'videos', maxCount: 5 },  // Jusqu'à 5 vidéos
  ]), ListingController.addMedia);

router.delete('/:listingId/media/:mediaType/:mediaUrl', ListingController.deleteMedia);

module.exports = router;