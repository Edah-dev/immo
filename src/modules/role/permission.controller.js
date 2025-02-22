const PermissionService = require('./permission.service');

class PermissionController {
  static async createPermission(req, res) {
    const { resource, action } = req.body;
    try {
      const permission = await PermissionService.createPermission(resource, action);
      res.status(201).json(permission);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getPermissions(req, res) {
    try {
      const permissions = await PermissionService.getPermissions();
      res.status(200).json(permissions);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = PermissionController;