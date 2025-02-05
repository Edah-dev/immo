const multer = require('multer');
const path = require('path');

// Configuration du stockage temporaire des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Dossier temporaire pour stocker les fichiers
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${path.basename(file.originalname)}`);
  },
});

// Fonction de validation des fichiers
const fileFilter = (req, file, cb) => {
  const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg', 'image/webp'];
  const allowedVideoTypes = ['video/mp4', 'video/avi', 'video/mov'];

  if (file.fieldname === 'images' && allowedImageTypes.includes(file.mimetype)) {
    cb(null, true); // Accepter le fichier
  } else if (file.fieldname === 'videos' && allowedVideoTypes.includes(file.mimetype)) {
    cb(null, true); // Accepter le fichier
  } else {
    cb(new Error('Type de fichier non supporté'), false); // Rejeter le fichier
  }
};

// Configuration de Multer
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024, // Limite de 10 Mo par fichier
  },
});

module.exports = upload;