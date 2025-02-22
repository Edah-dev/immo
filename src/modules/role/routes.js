const express = require('express');
const PermissionController = require('./permission.controller');
const RoleController = require('./role.controller');

const router = express.Router();

// Permission Endpoints
router.post('/permissions', PermissionController.createPermission);
router.get('/permissions', PermissionController.getPermissions);

// Role Endpoints
router.post('/', RoleController.createRole);
router.post('/add-permissions', RoleController.addPermissionsToRole);
router.get('/', RoleController.getRoles);
router.post('/remove-permission', RoleController.removePermissionFromRole);

module.exports = router;