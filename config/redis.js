const redis = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const client = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379',
});

client.on('error', (err) => {
  console.error('Erreur Redis:', err);
});

client.connect().then(() => {
    console.log('Connected to Redis');
}).catch((err) => {
    console.error('Redis connection error:', err);
});

module.exports = client;