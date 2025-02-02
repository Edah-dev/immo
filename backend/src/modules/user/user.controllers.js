const UserService = require('./user.services');

class UserController {
  static async register(req, res) {
    try {
      const user = await UserService.register(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const { user, token } = await UserService.login(email, password);
      res.json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getProfile(req, res) {
    try {
      const user = await UserService.getProfile(req.user.id);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async updateProfile(req, res) {
    try {
      const user = await UserService.updateProfile(req.user.id, req.body);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = UserController;