const express = require('express');
const userRoutes = require('./user/user.routes');
const listingRoutes = require('./listing/listing.routes');
const searchRoutes = require('./search/search.routes');
const documentRoutes = require('./user/user.document.routes');
const adminUserRoutes = require('./admin/user/admin.user.routes')

const router = express.Router();

router.use('/api/users', userRoutes);
router.use('/api/listings', listingRoutes);
router.use('/api/search', searchRoutes);
router.use('/api/documents', documentRoutes);
router.use('/api/admin', adminUserRoutes);

module.exports = router;