// Fichier : src/modules/admin/controllers/adminController.js
const AdminUserService = require('./admin.user.service');

class AdminUserController {
  static async listUsers(req, res) {
    try {
      const users = await AdminUserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      await AdminUserService.deleteUser(id);
      res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateDocumentStatus(req, res) {
    try {
      const { id } = req.params;
      const { status, comment } = req.body; // 'approved' ou 'rejected' avec un commentaire optionnel
      await AdminUserService.updateDocumentStatus(id, status, comment);
      res.json({ message: `Statut des documents mis à jour : ${status}` });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

}

module.exports = AdminUserController;