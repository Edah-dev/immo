const Permission = require('./user.models').Permission;

class PermissionService {
  static async createPermission(resource, action) {
    const permission = new Permission({ resource, action });
    await permission.save();
    return permission;
  }

  static async getPermissions() {
    return await Permission.find({});
  }
}

module.exports = PermissionService;