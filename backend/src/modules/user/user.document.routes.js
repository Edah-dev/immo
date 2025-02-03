const express = require('express');
const DocumentController = require('./user.document.controllers');
const authMiddleware = require('../../../middlewares/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' }); // Stocker temporairement les fichiers téléversés

const router = express.Router();

router.post('/', authMiddleware, upload.single('file'), DocumentController.uploadDocument);
router.get('/:userId', authMiddleware, DocumentController.getDocuments);
router.put('/:documentId/verify', authMiddleware, DocumentController.verifyDocument);

module.exports = router;