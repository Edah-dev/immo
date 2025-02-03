const express = require('express');
const UserController = require('./user.controllers');
const authMiddleware = require('../../../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', authMiddleware, UserController.getProfile);
router.put('/profile', authMiddleware, UserController.updateProfile);
router.post('/refresh-token', UserController.refreshToken);
router.post('/logout', UserController.logout);
router.get('/verify-email', UserController.verifyEmail);
router.post('/forgot-password', UserController.forgotPassword);
router.post('/reset-password', UserController.resetPassword);



module.exports = router;