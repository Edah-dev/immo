// const User = require('../modules/user/models/User');
// const Role = require('../modules/user/models/Role');
// const Permission = require('../modules/user/models/Permission');

//import { User,Role } from '../src/modules/user/user.models';

const User = require('../src/modules/user/user.models').User;
const Role = require('../src/modules/role/models').Role;

async function checkPermission(userId, resource, action) {
  const user = await User.findById(userId).populate('role');
  if (!user) return false;

  const role = await Role.findById(user.role).populate('permissions');
  if (!role) return false;

  const hasPermission = role.permissions.some(
    (permission) => permission.resource === resource && permission.action === action
  );

  return hasPermission;
}

module.exports = function (resource, action) {
  return async (req, res, next) => {
    const hasPermission = await checkPermission(req.user.id, resource, action);
    if (!hasPermission) {
      return res.status(403).json({ error: 'Accès refusé' });
    }
    next();
  };
};