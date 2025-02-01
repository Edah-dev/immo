const pool = require('../config/db');

class User {
  static async create({ email, password, role, firstName, lastName, phoneNumber }) {
    const query = `
      INSERT INTO users (email, password_hash, role, first_name, last_name, phone_number)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING id, email, role, first_name, last_name, phone_number;
    `;
    const values = [email, password, role, firstName, lastName, phoneNumber];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const { rows } = await pool.query(query, [email]);
    return rows[0];
  }

  static async findById(id) {
    const query = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  }

  static async updateProfile(id, { firstName, lastName, phoneNumber }) {
    const query = `
      UPDATE users
      SET first_name = $1, last_name = $2, phone_number = $3
      WHERE id = $4
      RETURNING id, email, first_name, last_name, phone_number;
    `;
    const values = [firstName, lastName, phoneNumber, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }
}

module.exports = User;