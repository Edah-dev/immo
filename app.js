const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const routes = require('./src/modules');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');
const initRoute = require('./src/scripts/init')

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
connectDB();

// Routes
app.use('/', routes);
// Route d'initialisation
app.use('/db', initRoute);



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Une erreur est survenue sur le serveur.' });
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});