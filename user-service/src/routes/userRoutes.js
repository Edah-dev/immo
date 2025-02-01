const express = require('express');
const UserController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/profile', authMiddleware, UserController.getProfile);
router.put('/profile', authMiddleware, UserController.updateProfile);

// Exemple : Seul un admin peut lister tous les utilisateurs
router.get(
  '/admin/users',
  authMiddleware,
  roleMiddleware('utilisateur', 'read'),
  UserController.listAllUsers
);

module.exports = router;