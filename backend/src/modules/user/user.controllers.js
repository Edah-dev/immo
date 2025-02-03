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
      //const { user, token } = await UserService.login(email, password);
      const { user, accessToken, refreshToken } = await UserService.login(email, password);
      res.json({ user, accessToken, refreshToken });
      //res.json({ user, token });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async refreshToken(req, res) {
    try {
      const { refreshToken } = req.body;
      const { accessToken } = await UserService.refreshToken(refreshToken);
      res.json({ accessToken });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async logout(req, res) {
    const { userId } = req.body;
    await UserService.logout(userId);
    res.json({ message: 'Déconnexion réussie' });
  } catch (error) {
    res.status(400).json({ error: error.message });
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

  static async verifyEmail(req, res) {
    try {
      const { token } = req.query; // Token de validation envoyé dans l'URL
      const user = await UserService.verifyEmail(token);
      res.json({ message: 'Email vérifié avec succès', user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async forgotPassword(req, res) {
    try {
      const { email } = req.body;
      await UserService.sendPasswordResetEmail(email);
      res.json({ message: 'Email de réinitialisation envoyé' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  static async resetPassword(req, res) {
    try {
      const { token, newpassword } = req.body;
      await UserService.resetPassword(token, newpassword);
      res.json({ message: 'Mot de passe réinitialisé avec succès' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

}

module.exports = UserController;