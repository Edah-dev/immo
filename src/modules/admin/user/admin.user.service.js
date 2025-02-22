const { User, Document } = require('../../user/user.models');


class AdminUserService {
    static async getAllUsers() {
      return await User.find({});
    }

    static async deleteUser(id) {
        await User.findByIdAndDelete(id);
    }
    
    static async updateDocumentStatus(documentId, status, comment) {
        const document = await User.findById(documentId);
        if (!document) throw new Error('Document non trouvé');
    
        document.status = status;
        if (status === 'rejected') {
          document.comment = comment;
        }
    
        await document.save();
    }

    
  }

module.exports = AdminUserService;