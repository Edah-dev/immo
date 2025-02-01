const pool = require('../config/db');

async function checkPermission(role, resource, action) {
  const query = `
    SELECT * FROM permissions
    WHERE role = $1 AND resource = $2 AND action = $3;
  `;
  const { rows } = await pool.query(query, [role, resource, action]);
  return rows.length > 0;
}

function roleMiddleware(resource, action) {
  return async (req, res, next) => {
    const userRole = req.user.role;
    const hasPermission = await checkPermission(userRole, resource, action);

    if (!hasPermission) {
      return res.status(403).json({ error: 'Accès refusé' });
    }

    next();
  };
}

module.exports = roleMiddleware;