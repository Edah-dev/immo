const User = require('./user.models').User;
const Role = require('../role/models').Role;
const Document = require('./user.models').Document;
const { generateAccessToken, generateRefreshToken } = require('../../../utils/jwt');
//const nodemailer = require('nodemailer');
const EmailService = require('../email/email.service');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService {
    static async register({ email, password, firstName, lastName, phoneNumber }) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const defaultRole = await Role.findOne({ name: 'tenant' }); // Rôle par défaut
        const user = new User({ email, password: hashedPassword, role: defaultRole._id, firstName, lastName, phoneNumber });
        await user.save();

        const accessToken = generateAccessToken(user._id);
        const verificationLink = `${process.env.HOST}/api/users/verify-email?token=${accessToken}`;

        // Envoyer l'email de vérification
        await EmailService.sendVerificationEmail(user, verificationLink);
        return user;
        }

  // static async login(email, password) {
  //   const user = await User.findOne({ email });
  //   if (!user) throw new Error('Utilisateur non trouvé');

  //   const isMatch = await bcrypt.compare(password, user.password);
  //   if (!isMatch) throw new Error('Mot de passe incorrect');

  //   console.log(process.env.JWT_EXPIRES_IN);

  //   const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
  //   return { user, token };
  // }

  static async login(email, password) {
    const user = await User.findOne({ email }).populate('role');
    if (!user) throw new Error('Utilisateur non trouvé');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Mot de passe incorrect');

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    // Stocker le refresh token dans la base de données
    user.refreshToken = refreshToken;
    await user.save();

    return { user, accessToken, refreshToken };
  }

  static async refreshToken(refreshToken) {
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error('Refresh token invalide');

    const accessToken = generateAccessToken(user._id);
    return { accessToken };
  }

  static async logout(userId) {
    await User.findByIdAndUpdate(userId, { refreshToken: null });
  }

  static async getProfile(id) {
    return await User.findById(id);
  }

  static async updateProfile(id, { firstName, lastName, phoneNumber }) {
    return await User.findByIdAndUpdate(id, { firstName, lastName, phoneNumber }, { new: true });
  }

  static async verifyUser(userId) {
    const documents = await Document.find({ userId });
    const allApproved = documents.every((doc) => doc.status === 'approved');

    if (allApproved) {
      await User.findByIdAndUpdate(userId, { isVerified: true });
    }
  }


  static async verifyEmail(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) throw new Error('Utilisateur non trouvé');

    user.isVerified = true;
    await user.save();

    return user;
  }


  static async sendPasswordResetEmail(email) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Utilisateur non trouvé');

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_RESET_PASSWORD_EXPIRES_IN });
    const resetLink = `${process.env.HOST}/api/users/reset-password?token=${token}`;

    // Envoyer l'email de réinitialisation du mot de passe
    await EmailService.sendPasswordResetEmail(user, resetLink);

    //await transporter.sendMail(mailOptions);
  }

  static async resetPassword(token, newPassword) {
    const decoded = jwt.verify(token, process.env.JWT_RESET_PASSWORD_EXPIRES_IN);
    const user = await User.findById(decoded.id);
    if (!user) throw new Error('Utilisateur non trouvé');

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
  }

}

module.exports = UserService;