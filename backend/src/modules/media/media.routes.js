const express = require('express');
const MediaController = require('./media.controllers');
const authMiddleware = require('../../../middlewares/authMiddleware');
const checkPermission = require('../../../middlewares/checkPermission')
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Stocker temporairement les fichiers téléversés

const router = express.Router();

router.post('/', authMiddleware,checkPermission('listing', 'create'), upload.single('file'), MediaController.uploadMedia);
router.get('/:id', MediaController.getMedia);
router.delete('/:id', authMiddleware,checkPermission('listing', 'delete'), MediaController.deleteMedia);

module.exports = router;