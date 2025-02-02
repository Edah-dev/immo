const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true }, // Référence au rôle
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  profilePictureUrl: { type: String },
  isVerified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});



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
    User: mongoose.model('User', UserSchema)
};

