
const Role = require('../modules/user/user.models').Role;
const Permission = require('../modules/user/user.models').Permission;
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const init = async () => {
  await mongoose.connect(process.env.MONGO_URI);
// Create permissions
const permissions = await Permission.insertMany([
    { resource: 'listing', action: 'create' },
    { resource: 'listing', action: 'read' },
    { resource: 'listing', action: 'update' },
    { resource: 'listing', action: 'delete' },
    { resource: 'user', action: 'read' },
    { resource: 'user', action: 'update' },
    { resource: 'user', action: 'delete' },
]);

// Create roles and assign permissions to them
await Role.insertMany([
    {
        name: 'owner',
        permissions: [permissions[0]._id, permissions[1]._id, permissions[2]._id, permissions[3]._id],
    },
    {
        name: 'tenant',
        permissions: [permissions[1]._id],
    },
    {
        name: 'admin',
        permissions: permissions.map((p) => p._id),
    },
]);

console.log('Roles and permissions initialized successfully');
process.exit();
};

init();
