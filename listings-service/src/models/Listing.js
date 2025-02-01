const pool = require('../config/db');

class Listing {
  static async create({ title, description, price, surface, location, type, userId }) {
    const query = `
      INSERT INTO listings (title, description, price, surface, location, type, user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `;
    const values = [title, description, price, surface, location, type, userId];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findById(id) {
    const query = 'SELECT * FROM listings WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  static async update(id, { title, description, price, surface, location, type }) {
    const query = `
      UPDATE listings
      SET title = $1, description = $2, price = $3, surface = $4, location = $5, type = $6
      WHERE id = $7
      RETURNING *;
    `;
    const values = [title, description, price, surface, location, type, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async delete(id) {
    const query = 'DELETE FROM listings WHERE id = $1 RETURNING *';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  static async findByUserId(userId) {
    const query = 'SELECT * FROM listings WHERE user_id = $1';
    const { rows } = await pool.query(query, [userId]);
    return rows;
  }
}

module.exports = Listing;