const mongoose = require('mongoose');

const RoleSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Ex: 'propriétaire', 'locataire', 'admin'
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
});


const PermissionSchema = new mongoose.Schema({
  resource: { type: String, required: true }, // Ex: 'annonce', 'utilisateur'
  action: { type: String, required: true },  // Ex: 'create', 'read', 'update', 'delete'
});

module.exports = {
    Permission: mongoose.model('Permission', PermissionSchema),
    Role: mongoose.model('Role', RoleSchema),
};