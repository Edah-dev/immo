const RoleService = require('./role.service');

class RoleController {
  static async createRole(req, res) {
    const { name } = req.body;
    try {
      const role = await RoleService.createRole(name);
      res.status(201).json(role);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

//   static async addPermissionToRole(req, res) {
//     const { roleId, permissionId } = req.body;
//     try {
//       const role = await RoleService.addPermissionToRole(roleId, permissionId);
//       res.status(200).json(role);
//     } catch (error) {
//       res.status(400).json({ message: error.message });
//     }
//   }

    static async addPermissionsToRole(req, res) {
        const { roleId, permissionIds } = req.body;
        try {
        const role = await RoleService.addPermissionsToRole(roleId, permissionIds);
        res.status(200).json(role);
        } catch (error) {
        res.status(400).json({ message: error.message });
        }
    }


    static async removePermissionFromRole(req, res) {
        const { roleId, permissionId } = req.body;
        try {
          const role = await RoleService.removePermissionFromRole(roleId, permissionId);
          res.status(200).json(role);
        } catch (error) {
          res.status(400).json({ message: error.message });
        }
      }

  static async getRoles(req, res) {
    try {
      const roles = await RoleService.getRoles();
      res.status(200).json(roles);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = RoleController;