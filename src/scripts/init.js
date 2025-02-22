const express = require('express');
const router = express.Router();
const Role = require('../modules/role/models').Role;
const Permission = require('../modules/role/models').Permission;



// Route d'initialisation
router.post('/init', async (req, res) => {
  try {
    // Créer les permissions
    const permissions = await Permission.insertMany([
      { resource: 'listing', action: 'create' },
      { resource: 'listing', action: 'read' },
      { resource: 'listing', action: 'update' },
      { resource: 'listing', action: 'delete' },
      { resource: 'user', action: 'read' },
      { resource: 'user', action: 'update' },
      { resource: 'user', action: 'delete' },
    ]);

    // Créer les rôles et assigner les permissions
    await Role.insertMany([
      {
        name: 'owner',
        permissions: [permissions[0]._id, permissions[1]._id, permissions[2]._id, permissions[3]._id],
      },
      {
        name: 'tenant',
        permissions: [permissions[1]._id],
      },
      {
        name: 'admin',
        permissions: permissions.map((p) => p._id),
      },
    ]);

    // Réponse de succès
    res.status(200).json({ message: 'Roles et permissions initialisés avec succès' });
  } catch (error) {
    console.error('Erreur lors de l\'initialisation:', error);
    res.status(500).json({ message: 'Erreur lors de l\'initialisation', error: error.message });
  }
});

module.exports = router;