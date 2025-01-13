// models/userModel.js
const { promisify } = require('util');
const CryptoJS = require("crypto-js");
const redisClient = require('../config/redisConfig');
const db = require('../config/databaseConfig');

const getAsync = promisify(redisClient.get).bind(redisClient);

// models/userModel.js
const registerUser = async (user) => {
  try {
    const { names, email, password, lastNames } = user;
    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.WHATSAPP_SECRET_KEY
    ).toString();
    
    const sql = 'INSERT INTO usuarios (nombre, correo, contraseña, apellidos) VALUES (?, ?, ?, ?)';
    console.log('SQL:', sql);

    const [result] = await db.promise().query(sql, [names, email, encryptedPassword, lastNames]);

    console.log('User registered successfully:', result);

    // Limpiar la cache de Redis para forzar la próxima consulta a la base de datos
    await redisClient.del('users');

    return result.insertId; // Puedes retornar el ID del nuevo usuario registrado si es necesario.
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};



const getAllUsers = async () => {
  try {
    // Intentar obtener datos de Redis
    const dataFromRedis = await getAsync('users');
    
    if (dataFromRedis) {
      return JSON.parse(dataFromRedis);
    } else {
      // Si no hay datos en Redis, obtener de la base de datos y almacenar en Redis
      const [usuarios] = await db.promise().query('SELECT * FROM usuarios');
      await redisClient.setex('users', 600, JSON.stringify(usuarios));
      return usuarios;
    }
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    const [usuario] = await db.promise().query('SELECT * FROM usuarios WHERE id = ?', [userId]);
    return usuario[0] || null;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  registerUser,
  getAllUsers,
  getUserById,
};
