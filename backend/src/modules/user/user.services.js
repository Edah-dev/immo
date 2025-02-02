const User = require('./user.models').User;
const Role = require('./user.models').Role;

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService {
    static async register({ email, password, firstName, lastName, phoneNumber }) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const defaultRole = await Role.findOne({ name: 'tenant' }); // Rôle par défaut
        const user = new User({ email, password: hashedPassword, role: defaultRole._id, firstName, lastName, phoneNumber });
        await user.save();
        return user;
        }

  static async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Utilisateur non trouvé');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Mot de passe incorrect');

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
    return { user, token };
  }

  static async getProfile(id) {
    return await User.findById(id);
  }

  static async updateProfile(id, { firstName, lastName, phoneNumber }) {
    return await User.findByIdAndUpdate(id, { firstName, lastName, phoneNumber }, { new: true });
  }
}

module.exports = UserService;