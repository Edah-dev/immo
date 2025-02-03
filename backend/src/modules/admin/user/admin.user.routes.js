// Fichier : src/modules/admin/routes/adminRoutes.js
const express = require('express');
const AdminUserController = require('./admin.user.controller');
const authMiddleware = require('../../../../middlewares/authMiddleware');
const checkPermission = require('../../../../middlewares/checkPermission');

const router = express.Router();

// Lister tous les utilisateurs (admin seulement)
router.get('/users', authMiddleware, checkPermission('user','read'), AdminUserController.listUsers);
router.delete('/users/:id', authMiddleware, checkPermission('user','delete'), AdminUserController.deleteUser);
router.put('/users/:id/documents', authMiddleware, checkPermission('user','update'), AdminUserController.updateDocumentStatus);

module.exports = router;