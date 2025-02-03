const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role', required: true }, // Référence au rôle
  firstName: { type: String },
  lastName: { type: String },
  phoneNumber: { type: String },
  refreshToken: { type: String }, // Champ pour stocker le refresh token
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


const DocumentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à l'utilisateur
  type: { type: String, enum: ['cni', 'passeport', 'justificatif_domicile'], required: true }, // Type de document
  url: { type: String, required: true }, // URL du document sur le CDN
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }, // Statut de vérification
  comment: { type: String }, // Commentaire en cas de rejet
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


module.exports = {
    Permission: mongoose.model('Permission', PermissionSchema),
    Role: mongoose.model('Role', RoleSchema),
    User: mongoose.model('User', UserSchema),
    Document: mongoose.model('Document', DocumentSchema),
};

