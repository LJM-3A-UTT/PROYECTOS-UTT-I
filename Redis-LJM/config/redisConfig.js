// config/redisConfig.js
const redis = require('redis');

const redisClient = redis.createClient();

redisClient.on('error', (err) => console.error('Error en la conexión a Redis:', err));
redisClient.on('connect', () => console.log('Conectado a Redis'));
redisClient.connect();
module.exports = redisClient;