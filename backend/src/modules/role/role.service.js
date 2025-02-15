const Role = require('./models').Role;
const Permission = require('./models').Permission;

class RoleService {
  static async createRole(name) {
    const role = new Role({ name });
    await role.save();
    return role;
  }

  // static async addPermissionToRole(roleId, permissionId) {
  //   const role = await Role.findById(roleId);
  //   const permission = await Permission.findById(permissionId);

  //   if (!role || !permission) {
  //     throw new Error('Role or Permission not found');
  //   }

  //   role.permissions.push(permission);
  //   await role.save();
  //   return role;
  // }

  static async addPermissionsToRole(roleId, permissionIds) {
    const role = await Role.findById(roleId);
    if (!role) {
      throw new Error('Role not found');
    }

    // Vérifier si les permissions existent
    const permissions = await Permission.find({ _id: { $in: permissionIds } });
    if (permissions.length !== permissionIds.length) {
      throw new Error('One or more permissions not found');
    }

    // Ajouter les permissions au rôle (en évitant les doublons)
    permissionIds.forEach(permissionId => {
      if (!role.permissions.includes(permissionId)) {
        role.permissions.push(permissionId);
      }
    });

    await role.save();
    return role;
  }

  static async removePermissionFromRole(roleId, permissionId) {
    const role = await Role.findById(roleId);
    if (!role) {
      throw new Error('Role not found');
    }

    // Vérifier si la permission existe
    const permission = await Permission.findById(permissionId);
    if (!permission) {
      throw new Error('Permission not found');
    }

    // Supprimer la permission du rôle
    role.permissions = role.permissions.filter(
      perm => perm.toString() !== permissionId.toString()
    );

    await role.save();
    return role;
  }

  static async getRoles() {
    return await Role.find({}).populate('permissions');
  }
}

module.exports = RoleService;