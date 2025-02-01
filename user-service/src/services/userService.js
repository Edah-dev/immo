const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

class UserService {
  static async register({ email, password, role, firstName, lastName, phoneNumber }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashedPassword, role, firstName, lastName, phoneNumber });
    return user;
  }

  static async login(email, password) {
    const user = await User.findByEmail(email);
    if (!user) throw new Error('Utilisateur non trouvé');

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) throw new Error('Mot de passe incorrect');

    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { user, token };
  }

  static async getProfile(id) {
    return await User.findById(id);
  }

  static async updateProfile(id, { firstName, lastName, phoneNumber }) {
    return await User.updateProfile(id, { firstName, lastName, phoneNumber });
  }

  static async listAllUsers() {
    const query = 'SELECT id, email, role, first_name, last_name, phone_number FROM users';
    const { rows } = await pool.query(query);
    return rows;
  }

  static async sendVerificationEmail(email) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Vérification de votre email',
      text: 'Cliquez sur ce lien pour vérifier votre email.',
    };
    await transporter.sendMail(mailOptions);
  }
}

module.exports = UserService;